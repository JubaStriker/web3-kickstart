const { Web3 } = require('web3');
const ganache = require('ganache');
const assert = require('assert');

const web3 = new Web3(ganache.provider());

const compiledCampaignFactory = require('../build/CampaignFactory.json');
const compiledCampaign = require('../build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
    factory = await new web3.eth.Contract(JSON.parse(compiledCampaignFactory.abi))
        .deploy({ data: compiledCampaignFactory.evm.bytecode.object })
        .send({ gas: '1000000', from: accounts[0] });
})
