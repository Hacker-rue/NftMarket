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
                "name": "setCodeIndex",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeIndexBasis",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeData",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setCodeDataChunk",
                "inputs": [
                    {
                        "name": "code",
                        "type": "cell"
                    }
                ],
                "outputs": []
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
    codeHash: "ebf8ab374b3f838e66b77ff91dda21958816374750673284c304dc65ecf8f455",
};
module.exports = { NftRootColectionContract };