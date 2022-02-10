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
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "countColections",
                        "type": "uint128"
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
                "type": "uint128"
            }
        ]
    },
    tvc: "te6ccgECJgEABPMAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsjBwQlAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEbBgEO2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8IiIIAiggghA821Wiu+MCIIIQTk6xMLvjAg4JAzwgghA+xhjyuuMCIIIQRQ8RlrrjAiCCEE5OsTC64wIZDAoDljD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkzk6xMLOzclw+wCRMOLjAH/4ZyELHwJujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zxa2zz5AHDIz4ZAygfL/8nQMRMSA5gw+Eby4Ez4Qm7jANTXDf+V1NHQ0//f0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADFDxGWjPFsv/yXD7AJEw4uMAf/hnIQ0fAQzbPPkAbCETBEwgggvXmeS64wIgggvtppu64wIgghAYepmOuuMCIIIQPNtVorrjAh4aGQ8DKjD4RvLgTPhCbuMA1NTR2zzbPH/4ZyEQHwP+aKb+YIIQBfXhAIIQO5rKAKC1f77y4GTbPPhJ+FDbPPhJWFUC+E/4TvhN+ExVBiD5AMjPigBAy//Iz4WIzxONBJDuaygAAAAAAAAAAAAAAAAAAcDPFszPg1VgyM+RBAkHWszMzFUwyMzMzM7Nzclw+wD4UKS1f/hw+EnIz4WIzhMSEQASgG/PQMmAQPsAAFhtcMjL/3BYgED0Q1hxWIBA9BYByMv/cliAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwUAhYhizits1jHBYqK4hYVAQgB2zzJFwEmAdTUMBLQ2zzIz44rbNYSzM8RyRcBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhgBBIgBJQMmMPhG8uBM+EJu4wDR2zzbPH/4ZyElHwJQMPhCbuMA+Ebyc9TU1NTR0NTU0fgAVQL4bFj4bQH4bvhv+GrbPH/4ZxsfAhbtRNDXScIBio6A4iEcBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0lJSUdAjSI+G6I+G9w+HCAQPQO8r3XC//4YnD4Y3D4cCUlA4Iw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAg9eZ5IzxbLf8lw+wCRMOLjAH/4ZyEgHwBe+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8wBbyICyx/0AMxVMMjMzMzLf83J7VQABPhQAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NN/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShJSQAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECIwEABMYABCSK7VMg4wMgwP/jAiDA/uMC8gsgBAEiAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEYAwEO2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Hx8FAiggghA821Wiu+MCIIIQTk6xMLvjAgsGAzwgghA+xhjyuuMCIIIQRQ8RlrrjAiCCEE5OsTC64wIWCQcDljD4RvLgTPhCbuMA+kGV1NHQ+kDf1w1/ldTR0NN/39HbPCGOHyPQ0wH6QDAxyM+HIM5xzwthAcjPkzk6xMLOzclw+wCRMOLjAH/4Zx4IHAJujQhgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE2zxa2zz5AHDIz4ZAygfL/8nQMRAPA5gw+Eby4Ez4Qm7jANTXDf+V1NHQ0//f0ds8IY4oI9DTAfpAMDHIz4cgzo0EAAAAAAAAAAAAAAAADFDxGWjPFsv/yXD7AJEw4uMAf/hnHgocAQzbPPkAbCEQBEwgggvXmeS64wIgggvtppu64wIgghAYepmOuuMCIIIQPNtVorrjAhsXFgwDKjD4RvLgTPhCbuMA1NTR2zzbPH/4Zx4NHAP+aKb+YIIQBfXhAIIQO5rKAKC1f77y4GTbPPhJ+FDbPPhJWFUC+E/4TvhN+ExVBiD5AMjPigBAy//Iz4WIzxONBJDuaygAAAAAAAAAAAAAAAAAAcDPFszPg1VgyM+RBAkHWszMzFUwyMzMzM7Nzclw+wD4UKS1f/hw+EnIz4WIzhAPDgASgG/PQMmAQPsAAFhtcMjL/3BYgED0Q1hxWIBA9BYByMv/cliAQPRDyPQAyQHIz4SA9AD0AM+ByQEW+CjIzvhK0AHJ2zwRAhYhizits1jHBYqK4hMSAQgB2zzJFAEmAdTUMBLQ2zzIz44rbNYSzM8RyRQBZtWLL0pA1yb0BNMJMSDXSpHUjoDiiy9KGNcmMAHIz4vSkPQAgCDPCwnPi9KGzBLMyM8RzhUBBIgBIgMmMPhG8uBM+EJu4wDR2zzbPH/4Zx4iHAJQMPhCbuMA+Ebyc9TU1NTR0NTU0fgAVQL4bFj4bQH4bvhv+GrbPH/4ZxgcAhbtRNDXScIBio6A4h4ZBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0iIiIaAjSI+G6I+G9w+HCAQPQO8r3XC//4YnD4Y3D4cCIiA4Iw+Eby4Ez4Qm7jANHbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAg9eZ5IzxbLf8lw+wCRMOLjAH/4Zx4dHABe+FD4T/hO+E34TPhL+Er4Q/hCyMv/yz/Pg8wBbyICyx/0AMxVMMjMzMzLf83J7VQABPhQAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NN/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIiEAFHNvbCAwLjQ5LjAAAA==",
    codeHash: "9c0de4ccd1036bd3a93ba2bb61e203c91e8d0a6f3fc0015cb596dfe30db91def",
};
module.exports = { NFTMarketContract };