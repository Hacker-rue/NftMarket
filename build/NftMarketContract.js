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
                "name": "resolveCodeHashIndexOffer",
                "inputs": [
                    {
                        "name": "addrMarket",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "codeHashIndexOffer",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveAddrIndexOffer",
                "inputs": [
                    {
                        "name": "addrMarket",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrOffer",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndexOffer",
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
                "name": "_codeIndexOffer",
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
    codeHash: "7454ec622dd59fdd698c9ae103c26dba0efaf0cc7eb8a2035e83c3da033a5f26",
};
module.exports = { NFTMarketContract };