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
                    }
                ],
                "outputs": []
            },
            {
                "name": "Buy",
                "inputs": [],
                "outputs": []
            },
            {
                "name": "putOnSale",
                "inputs": [],
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
                    }
                ],
                "outputs": []
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
                        "name": "id",
                        "type": "uint256"
                    },
                    {
                        "name": "addrOwner",
                        "type": "address"
                    },
                    {
                        "name": "code",
                        "type": "cell"
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
                "name": "NftColectionsOwner",
                "type": "address[]"
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
                "name": "_countColections",
                "type": "uint256"
            }
        ]
    },
    tvc: "te6ccgECIwEABIEAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsgBwQiAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEbBgEO2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Hx8IAiggghA821Wiu+MCIIIQRQ8RlrvjAgwJAiggghA+xhjyuuMCIIIQRQ8RlrrjAhgKA5gw+Eby4Ez4Qm7jANTXDf+V1NHQ0//f0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADFDxGWjPFsv/yXD7AJEw4uMAf/hnHgsaAQoB2zz5ABIETiCCC+2mm7rjAiCCEBh6mY664wIgghAjcrMKuuMCIIIQPNtVorrjAhkYDw0DKjD4RvLgTPhCbuMA1NTR2zzbPH/4Zx4OGgLwaKb+YIIQBfXhAIIQO5rKAKC1f77y4GT4UPhK2zz4Sds8+ElYVQL4T/hO+E34TFUGIPkAyM+KAEDL/8jPhYjPE40EkO5rKAAAAAAAAAAAAAAAAAABwM8WzM+DVWDIz5EECQdazMzMVTDIzMzMzs3NyXD7APhQpPhwEhEDmDD4RvLgTPhCbuMA1w3/ldTR0NP/3/pBldTR0PpA39TR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KNyswqzs3JcPsAkTDi4wB/+GceEBoCdI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFUCWNs8WNs8+QBwyM+GQMoHy//J0DESEQBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQEUAcjL/wHQAcnbPBMCFiGLOK2zWMcFioriFRQBCAHbPMkWASYB1NQwEtDbPMjPjits1hLMzxHJFgFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFwEEiAEiAyYw+Eby4Ez4Qm7jANHbPNs8f/hnHiIaAlAw+EJu4wD4RvJz1NTU1NHQ1NTR+ABVAvhsWPhtAfhu+G/4ats8f/hnGxoAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PMAW8iAssf9ADMVTDIzMzMy//Nye1UAhbtRNDXScIBio6A4h4cBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0iIiIdAi6I+G6I+G9w+HCAQPQO8r3XC//4YnD4YyIiAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NP/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIiEAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECIAEABFQABCSK7VMg4wMgwP/jAiDA/uMC8gsdBAEfAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEYAwEO2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HBwFAiggghA821Wiu+MCIIIQRQ8RlrvjAgkGAiggghA+xhjyuuMCIIIQRQ8RlrrjAhUHA5gw+Eby4Ez4Qm7jANTXDf+V1NHQ0//f0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADFDxGWjPFsv/yXD7AJEw4uMAf/hnGwgXAQoB2zz5AA8ETiCCC+2mm7rjAiCCEBh6mY664wIgghAjcrMKuuMCIIIQPNtVorrjAhYVDAoDKjD4RvLgTPhCbuMA1NTR2zzbPH/4ZxsLFwLwaKb+YIIQBfXhAIIQO5rKAKC1f77y4GT4UPhK2zz4Sds8+ElYVQL4T/hO+E34TFUGIPkAyM+KAEDL/8jPhYjPE40EkO5rKAAAAAAAAAAAAAAAAAABwM8WzM+DVWDIz5EECQdazMzMVTDIzMzMzs3NyXD7APhQpPhwDw4DmDD4RvLgTPhCbuMA1w3/ldTR0NP/3/pBldTR0PpA39TR2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5KNyswqzs3JcPsAkTDi4wB/+GcbDRcCdI0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFUCWNs8WNs8+QBwyM+GQMoHy//J0DEPDgBEbXDIy/9wWIBA9EMBcViAQPQWyPQAyQHIz4SA9AD0AM+ByQEUAcjL/wHQAcnbPBACFiGLOK2zWMcFioriEhEBCAHbPMkTASYB1NQwEtDbPMjPjits1hLMzxHJEwFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFAEEiAEfAyYw+Eby4Ez4Qm7jANHbPNs8f/hnGx8XAlAw+EJu4wD4RvJz1NTU1NHQ1NTR+ABVAvhsWPhtAfhu+G/4ats8f/hnGBcAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PMAW8iAssf9ADMVTDIzMzMy//Nye1UAhbtRNDXScIBio6A4hsZBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0fHx8aAi6I+G6I+G9w+HCAQPQO8r3XC//4YnD4Yx8fAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NP/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShHx4AFHNvbCAwLjQ5LjAAAA==",
    codeHash: "f3fd5e5538190f49ba5f89368dbbbfbbe3740a6c4471099c0c1e549a9db23c6a",
};
module.exports = { NFTMarketContract };