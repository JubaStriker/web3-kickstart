import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5F179f237589B63D3Ef090Fa0D7456fC12F5aAcb'
)

export default instance;