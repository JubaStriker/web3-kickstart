const path = require('path');
const solc = require("solc");
const fs = require('fs-extra');


// Delete the build folder if it exists //
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
const source = fs.readFileSync(campaignPath, 'utf8');
const output = solc.compile(source, 1).contracts;



// Re-create the build folder //
fs.ensureDirSync(buildPath)


for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, contract.replace(':', '') + '.json'),
        output[contract]
    )
}


