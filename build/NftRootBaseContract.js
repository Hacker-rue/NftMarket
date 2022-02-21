const NftRootBaseContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time",
            "expire"
        ],
        "functions": [
            {
                "name": "constructor",
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
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "mintNft",
                "inputs": [
                    {
                        "name": "wid",
                        "type": "int8"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "descriprion",
                        "type": "string"
                    },
                    {
                        "name": "contentHash",
                        "type": "uint256"
                    },
                    {
                        "name": "mimeType",
                        "type": "string"
                    },
                    {
                        "name": "chunks",
                        "type": "uint8"
                    },
                    {
                        "name": "chunkSize",
                        "type": "uint128"
                    },
                    {
                        "name": "size",
                        "type": "uint128"
                    },
                    {
                        "components": [
                            {
                                "name": "height",
                                "type": "uint128"
                            },
                            {
                                "name": "width",
                                "type": "uint128"
                            },
                            {
                                "name": "duration",
                                "type": "uint128"
                            },
                            {
                                "name": "extra",
                                "type": "string"
                            },
                            {
                                "name": "json",
                                "type": "string"
                            }
                        ],
                        "name": "meta",
                        "type": "tuple"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "version",
                        "type": "string"
                    },
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
                    },
                    {
                        "name": "totalSupply",
                        "type": "uint128"
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "codeHashIndex",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveIndex",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrIndex",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "resolveCodeHashData",
                "inputs": [],
                "outputs": [
                    {
                        "name": "codeHashData",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "resolveData",
                "inputs": [
                    {
                        "name": "addrRoot",
                        "type": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "_inited",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_inited",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_addrOwner",
                "type": "address"
            }
        ],
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
                "name": "_codeData",
                "type": "cell"
            },
            {
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_checkList",
                "type": "uint8"
            },
            {
                "name": "_addrOwner",
                "type": "address"
            },
            {
                "name": "_addrAuthor",
                "type": "address"
            },
            {
                "name": "_addrBasis",
                "type": "address"
            },
            {
                "name": "_version",
                "type": "string"
            },
            {
                "name": "_totalSupply",
                "type": "uint128"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_description",
                "type": "string"
            },
            {
                "name": "_icon",
                "type": "string"
            },
            {
                "name": "_inited",
                "type": "bool"
            },
            {
                "name": "_codeDataChunk",
                "type": "cell"
            },
            {
                "name": "_codeIndexBasis",
                "type": "cell"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "27fbb529306c3b352775cd30da2fa87feecb93308839294c6e208398c284c53e",
};
module.exports = { NftRootBaseContract };