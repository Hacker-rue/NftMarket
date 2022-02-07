const NftRootColectionContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                "name": "mintNft",
                "inputs": [],
                "outputs": []
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
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "1c6bda4338f0f12dc9941c6f93cfc0d707948e21f1d3202fdbff4cd504a5bd94",
};
module.exports = { NftRootColectionContract };