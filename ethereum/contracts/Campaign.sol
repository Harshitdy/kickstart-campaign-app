pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;
    
    function createCampaign(uint minimun) public {
        address newCampaign = new Campaign(minimun, msg.sender);
        deployedCampaigns.push(newCampaign);
    }
    
    function getDeplyedCampaigns() public view returns(address[]) {    //view means no data can modified by this function
        return deployedCampaigns;
        }
}

contract Campaign {
    struct Request {  // struct is not like global
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    Request[] public requests;
    address public manager;  // it will just store the address of the manager
    uint public minimunContribution;
    mapping(address => bool) public approvers;
    uint public approversCount;
    
    modifier restricted() {   // it's like a def in python we can use wherever we want
        require(msg.sender == manager);
        _;
    }
    
    function Campaign(uint minimun, address creator) public {
        manager = creator;
        minimunContribution = minimun;
    }
    
    function contribute() public payable {
        require(msg.value > minimunContribution); // it is require to the person to send at least this amount of money
        
        approvers[msg.sender] = true;
        approversCount++;
    }
    
    function createRequest(string description, uint value, address recipient)
    public restricted 
    {
       Request memory newRequest = Request({   // the R.H.S one is instance it will take all arguments of struct
         description: description,
         value: value,
         recipient: recipient,
         complete: false, 
         approvalCount: 0
       }); 
       
       requests.push(newRequest);
    }
    
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }
    
    function finalizeRequests(uint index) public restricted {
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount / 2));
        require(!request.complete);
        
        request.recipient.transfer(request.value);
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, uint, uint, uint, address
    ) {
        return(
            minimunContribution,
            this.balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
    
}

