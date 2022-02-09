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
    codeHash: "4bf5456d9f46ada7c9ef952d26bba99db790e593cb64e61d94a0ef10505abc1e",
};
module.exports = { DataContract };