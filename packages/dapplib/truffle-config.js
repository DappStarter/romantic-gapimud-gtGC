require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain umbrella idea enter front situate'; 
let testAccounts = [
"0x9c02374a4fb25ed2aa30f308d5d456b7681cc125ffcfd10fcc8a38d6a0b74595",
"0x958354305a1e69b0e062f06207e13fa2d56792f495fb61c003c559fa1ab08dda",
"0xbe1f6ab8ace970d5c7ce0a1db50714a51e4b78ea8609a602b518e1f759286a17",
"0x919b12aa5287f1d02813b31a64428d0f476914bfd58a0f68f97c72bbf0b4d465",
"0xaf4bfbcc70f635dae16935c45e1b8ecde7de0d4052ece769f25884f600a4a9d3",
"0x16656accb99896625690b58186df5a7873bd2a47dc0ec3843ad4cf47d8a73547",
"0x80ea9eb82fb3d0eaccf568e1ba056133d00cb1f79c5b77c6e62c4ec9495ab2d7",
"0x9d6ce9c3f23327f7b58be564fca25a115255c9ee72ce803546740d7d1420d350",
"0x9f0b445d140568fe6118e599290b500e89ab730dc3fb0c838d420e3221c36456",
"0x8f7bd6519795a749c3605854c603d39879f132918f37a97478a5bff4175afad0"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


