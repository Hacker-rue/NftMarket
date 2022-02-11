const NFTMarketContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "pubkey",
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
                "inputs": [
                    {
                        "name": "root",
                        "type": "cell"
                    },
                    {
                        "name": "oneRoot",
                        "type": "cell"
                    },
                    {
                        "name": "data",
                        "type": "cell"
                    },
                    {
                        "name": "dataChunk",
                        "type": "cell"
                    },
                    {
                        "name": "index",
                        "type": "cell"
                    },
                    {
                        "name": "indexBasis",
                        "type": "cell"
                    },
                    {
                        "name": "offer",
                        "type": "cell"
                    },
                    {
                        "name": "indexOffer",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "putOnSale",
                "inputs": [
                    {
                        "name": "addrNft",
                        "type": "address"
                    },
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployColection",
                "inputs": [
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "description",
                        "type": "string"
                    },
                    {
                        "name": "icon",
                        "type": "string"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countColections",
                        "type": "uint128"
                    },
                    {
                        "name": "oneRoot",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashOffer",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashOffer",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveAddrOffer",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrNft",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrOffer",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashNftRoot",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveNftRoot",
                "inputs": [
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrNftRoot",
                        "type": "address"
                    }
                ]
            }
        ],
        "data": [],
        "events": [],
        "fields": [
            {
                "name": "_pubkey",
                "type": "uint256"
            },
            {
                "name": "_timestamp",
                "type": "uint64"
            },
            {
                "name": "_constructorFlag",
                "type": "bool"
            },
            {
                "name": "_codeNftRoot",
                "type": "cell"
            },
            {
                "name": "_codeOffer",
                "type": "cell"
            },
            {
                "name": "oneNFTRoot",
                "type": "address"
            },
            {
                "name": "_data",
                "type": "cell"
            },
            {
                "name": "_dataChunk",
                "type": "cell"
            },
            {
                "name": "_index",
                "type": "cell"
            },
            {
                "name": "_indexBasis",
                "type": "cell"
            },
            {
                "name": "_indexOffer",
                "type": "cell"
            },
            {
                "name": "_countColections",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "3d756c7512bdf73db805589080950805582367639d146ebca2b4bf4eefea6530",
};
module.exports = { NFTMarketContract };