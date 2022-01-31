require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot edge rescue pitch punch gown light army giggle'; 
let testAccounts = [
"0x367d1a712c0472a5c3fad8ece25754e1a127bf9dfa5924c9f2c39fa209f8f0d6",
"0x69226f238fc1c540dc6725e389de86414349049d3688866052d08920c8fe6e9e",
"0xa1811fe86f212f9c7fc922a9009219146249068b006fdd4057ce4727380111de",
"0x615e784994327a9053462788db8f416cdd15b423ab0f9f54efa984d0cc8d2111",
"0xdfadc45bcd7a8fe6156f72989ea0e3f94064206e0d44530cb26708d9e736a9fa",
"0xd1057e46dfde2d6ae98c783ea64560c1dbf424c0cf3765cbc11ead7d0e0e8721",
"0x41c7fe788bb2e5a40d0091e4ff0e1ceb9ed07928c5c41a591b578ab5e006641b",
"0xf51013ff19bd5c11c6d745cea02378e1800e0c6c2e6cdd54a86085f955b7416a",
"0x066189a6c0f214e8a611e08c79f023702e52a8f5164590e76de5b0c92b704bc7",
"0x2e3ded6e4b921e8e3d21f9c253f76bea054fc65404e657ea4a477b771c662c55"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

