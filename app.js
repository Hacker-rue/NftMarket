const { Account } = require("@tonclient/appkit")
const { TonClient, signerNone, signerKeys } = require("@tonclient/core")
const {libNode} = require('@tonclient/lib-node')

TonClient.useBinaryLibrary(libNode)

const { NFTMarketContract } = require('./build/NFTMarketContract')
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
    // var NftMarket = new Account(NftMarketContract, {
    //     address: "0:65988b6da6392ce4d9ce1f79b5386e842c33b4161a2bbe76bdae170db711da31",
    //     signer: signerNone(),
    //     client: client
    // })

    var NftMarket = new Account(NFTMarketContract, {
        signer: signerKeys(await TonClient.default.crypto.generate_random_sign_keys()),
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

    // try {
    //     ress = await NftMarket.runLocal("resolveNftRoot", {
    //         addrNftMarket: "0:65988b6da6392ce4d9ce1f79b5386e842c33b4161a2bbe76bdae170db711da31",
    //         addrOwner: "0:b0037ab1fe1b11f75c66ef569a582e3ddb96ee3cc548ab5f349d2355af916793"
    //     })
    //     console.log(ress)
    // } catch(er) {
    //     console.log(er)
    // }

    


}

main()