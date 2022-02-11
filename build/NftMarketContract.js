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
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
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
    codeHash: "c8b7831106c24b459b02ddc424a282d617ec663cf95a7a6b03ecab0d7d7fdd27",
};
module.exports = { NFTMarketContract };