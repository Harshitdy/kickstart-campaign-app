const path  = require('path');
const solc = require('solc');
const fs = require('fs-extra'); // fs=> file system

const buildPath  = path.resolve(__dirname, 'build');
fs.removeSync(buildPath); // deleting the folder "build"

const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol'); 
const source = fs.readFileSync(campaignPath, 'utf8');  //reading the sol file
                                                        // utf8 is encoding of the file

                                                        
const output = solc.compile(source, 1).contracts; // compiling the solidity contract

fs.ensureDirSync(buildPath);  //recreate the build folder

for (let contract in output) {
    fs.outputJsonSync(
        path.resolve(buildPath, contract.replace(":", "")  + '.json'), 
        output[contract]
    );
}