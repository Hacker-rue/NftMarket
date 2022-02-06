const DataContract = {
    abi: {
        "ABI version": 2,
        "version": "2.2",
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
                    },
                    {
                        "name": "royaltyMin",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "putOnSale",
                "inputs": [
                    {
                        "name": "price",
                        "type": "uint128"
                    }
                ],
                "outputs": []
            },
            {
                "name": "removeFromSale",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "buy",
                "inputs": [],
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
                    },
                    {
                        "name": "royaltyMin",
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
                "name": "_version",
                "type": "string"
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
                "name": "_royaltyMin",
                "type": "uint128"
            },
            {
                "name": "_onSale",
                "type": "bool"
            },
            {
                "name": "_price",
                "type": "uint128"
            }
        ]
    },
    tvc: "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",
    code: "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",
    codeHash: "999d5e80699924497a4035e32065a797fa96586ab2fb64192a7ac12ca788536d",
};
module.exports = { DataContract };