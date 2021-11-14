import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x18E2C68Eee8b845f7b1A895A78294728392DBF05'
);

export default instance;
