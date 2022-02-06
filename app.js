const { Account } = require("@tonclient/appkit")
const { TonClient, signerNone, signerKeys } = require("@tonclient/core")
const {libNode} = require('@tonclient/lib-node')

TonClient.useBinaryLibrary(libNode)

const { NftMarketContract } = require('./build/NftMarketContract')
const { NftRootColectionContract } = require('./build/NftRootColectionContract')
const { DataContract } = require("./build/DataContract")
const { DataChunkContract } = require('./build/DataChunkContract')
const { IndexContract } = require('./build/IndexContract')
const { IndexBasisContract } = require('./build/IndexBasisContract')


const client = new TonClient({
    network: {
        endpoints: ["net.ton.dev"]
    }
})


async function main() {
    var NftMarket = new Account(NftMarketContract, {
        signer: await signerKeys(await TonClient.default.crypto.generate_random_sign_keys()),
        client: client
    })

    ress = await NftMarket.deploy({initFunctionName: "constructor", initInput: {
        root: NftRootColectionContract.code,
        data: DataContract.code,
        dataChunk: DataChunkContract.code,
        index: IndexContract.code,
        indexBasis: IndexBasisContract.code
    },useGiver: true})

    console.log(ress)
    console.log(NftMarket)
}

main()