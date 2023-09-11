const { Web3 } = require('web3');
const ganache = require('ganache');
const assert = require('assert');

const web3 = new Web3(ganache.provider());

const compiledCampaignFactory = require('../build/CampaignFactory.json');
const compiledCampaign = require('../build/Campaign.json');