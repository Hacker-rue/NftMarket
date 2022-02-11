const DataContract = {
    abi: {
        "ABI version": 2,
        "version": "2.1",
        "header": [
            "time"
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
                        "name": "descriprion",
                        "type": "string"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
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
                        "name": "codeIndex",
                        "type": "cell"
                    },
                    {
                        "name": "codeDataChunk",
                        "type": "cell"
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
                "name": "setRoyalty",
                "inputs": [
                    {
                        "name": "royalty",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "setAddrApproved",
                "inputs": [
                    {
                        "name": "addrApproved",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "transfer",
                "inputs": [
                    {
                        "name": "addrTo",
                        "type": "address"
                    }
                ],
                "outputs": []
            },
            {
                "name": "deployDataChunk",
                "inputs": [
                    {
                        "name": "chunk",
                        "type": "bytes"
                    },
                    {
                        "name": "chunkNumber",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getAddrOwner",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
            },
            {
                "name": "getAddrApproved",
                "inputs": [
                    {
                        "name": "answerId",
                        "type": "uint32"
                    }
                ],
                "outputs": [
                    {
                        "name": "value0",
                        "type": "address"
                    }
                ]
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
                        "name": "descriprion",
                        "type": "string"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "addrAuthor",
                        "type": "address"
                    },
                    {
                        "name": "createdAt",
                        "type": "uint128"
                    },
                    {
                        "name": "addrRoot",
                        "type": "address"
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
                    },
                    {
                        "name": "royalty",
                        "type": "uint128"
                    }
                ]
            },
            {
                "name": "resolveDataChunk",
                "inputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "chunkNumber",
                        "type": "uint128"
                    }
                ],
                "outputs": [
                    {
                        "name": "addrDataChunk",
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
                "name": "_id",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_id",
                        "type": "uint256"
                    }
                ]
            },
            {
                "name": "_deployed",
                "inputs": [],
                "outputs": [
                    {
                        "name": "_deployed",
                        "type": "bool"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
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
                "name": "_codeIndex",
                "type": "cell"
            },
            {
                "name": "_codeDataChunk",
                "type": "cell"
            },
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_descriprion",
                "type": "string"
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
                "name": "_createdAt",
                "type": "uint128"
            },
            {
                "name": "_addrRoot",
                "type": "address"
            },
            {
                "name": "_contentHash",
                "type": "uint256"
            },
            {
                "name": "_mimeType",
                "type": "string"
            },
            {
                "name": "_chunks",
                "type": "uint8"
            },
            {
                "name": "_chunkSize",
                "type": "uint128"
            },
            {
                "name": "_size",
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
                "name": "_meta",
                "type": "tuple"
            },
            {
                "name": "_id",
                "type": "uint256"
            },
            {
                "name": "_deployed",
                "type": "bool"
            },
            {
                "name": "_royalty",
                "type": "uint128"
            },
            {
                "name": "_addrApproved",
                "type": "address"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "a2772bec04eed3871a9c6d10dce7252b0b8e43c7185d3d9efe91099d66c1aff8",
};
module.exports = { DataContract };