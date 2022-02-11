const NftRootColectionContract = {
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
                        "name": "codeData",
                        "type": "cell"
                    },
                    {
                        "name": "codeDataChunk",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "codeIndexBasis",
                        "type": "cell"
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
                        "name": "addrAuthor",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployMetadata",
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
                        "name": "description",
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
                "name": "mintNft",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
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
                        "name": "maxMinted",
                        "type": "uint256"
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
            },
            {
                "key": 2,
                "name": "_id",
                "type": "uint256"
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
            },
            {
                "name": "_maxMinted",
                "type": "uint256"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_addrCreator",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "36927cc797c568d1e74ad67622a995d9db3e0dcfb3602140662850f28f6f5ed8",
};
module.exports = { NftRootColectionContract };