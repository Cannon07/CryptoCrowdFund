import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    CampaignFactory.abi,
    "0xf28B3Eb0d4Acdaa3966B37B297BC0ac17828Fa01"
);

export default instance;