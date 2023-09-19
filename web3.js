import Web3 from "web3";
const HDWalletProvider = require('@truffle/hdwallet-provider');

// window.ethereum.request({ method: "eth_requestAccounts" });

// const web3 = new Web3(window.ethereum);

// export default web3;


let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    // we are in the browser and metamask is running
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.ethereum);
}
else {
    // we are on the server *OR* the user is not running metamask
    // https://medium.com/jelly-market/how-to-get-infura-api-key-e7d552dd396f
    // const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/xxx_your_key_here_xxx");
    // web3 = new Web3(provider);

    const provider = new HDWalletProvider(
        'jealous pudding spread north blue sail dumb patient blanket around grain ginger',
        // remember to change this to your own phrase!
        'https://sepolia.infura.io/v3/e96bc6414fe94ccc9cdfe320af17137b'
        // remember to change this to your own endpoint!
    );
    web3 = new Web3(provider);

}

export default web3;