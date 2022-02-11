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
    codeHash: "c190010dc301c359af4837bf252999645655a63bb221297511f2fa31d2e7b35d",
};
module.exports = { NftRootBaseContract };