const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');
const { send } = require('process');
const { constants } = require('buffer');

let accounts; //listing all the different account in local ganache network
let factory;  //
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();  // form this we will get our list af accounts
    
    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface)) //Contract is not going to take direct
                                                                                // json file thats why we have to parse the json file
    .deploy({data: compiledFactory.bytecode }) //deploying the data in file compiledfactory(bytecode)
    .send({ from: accounts[0], gas: '1000000', gasPrice: '5000000000'});

    await factory.methods.createCampaign('100').send({
        from: accounts[0],
        gas: '1000000'
    });

    [campaignAddress] = await factory.methods.getDeplyedCampaigns().call(); //it's going to return array of addresses
    // [campaignAddress] is going to return first address and assign to campaignAdress variable

    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface), 
        campaignAddress
    );
});

describe('Campaigns', () => {
    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows people to contribute money and marks them as approvers', async () =>{
        await campaign.methods.contribute().send({
            value: '200',
            from: accounts[1]
        });
        const isContributor = await campaign.methods.approvers(accounts[1]).call();
        assert(isContributor);
    });

    it('requires a minimun contribution', async () => {
        try {
            await campaign.methods.contribute().send({
                value: '5', 
                from: accounts[1]
            });
            assert(false);
        } catch (err) {
            assert(err)
        }
    });

    it('allows a manager to make a payment', async () => {
        await campaign.methods.createRequest('buy batteries', '100', accounts[1])
        .send({
            from: accounts[0],
            gas: '1000000'
        });
     const request = await campaign.methods.requests(0).call();

     assert.equal('buy batteries', request.description);
    });

    it('processes request', async () =>{
        await campaign.methods.contribute().send({
            from: accounts[0],
            value: web3.utils.toWei('10', 'ether')
        });
        await campaign.methods
        .createRequest('A', web3.utils.toWei('5', 'ether'), accounts[1])
        .send({from: accounts[0], gas: '1000000' });

        await campaign.methods.approveRequest(0).send({
            from: accounts[0], 
            gas: '1000000'
        });

        await campaign.methods.finalizeRequests(0).send({
            from: accounts[0],
            gas: '1000000'
        });

        let balance = await web3.eth.getBalance(accounts[1]);  // it returns the availbale balance of the account[1]
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance); //it takes a sring and convert that to a decimal number
        
        assert(balance > 104);
    });
});




















