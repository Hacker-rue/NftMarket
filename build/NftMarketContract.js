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
    tvc: "te6ccgECJAEABJ8AAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gshBwQjAQAFAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEcBgEO2zz4R27yfAgDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8ICAIAiggghA+xhjyu+MCIIIQTk6xMLvjAg4JAiggghBFDxGWuuMCIIIQTk6xMLrjAgwKA5Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5M5OsTCzs3JcPsAkTDi4wB/+GcfCxsCbo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNs8Wts8+QBwyM+GQMoHy//J0DETEgOYMPhG8uBM+EJu4wDU1w3/ldTR0NP/39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAxQ8RlozxbL/8lw+wCRMOLjAH/4Zx8NGwEM2zz5AGwhEwROIIIL7aabuuMCIIIQGHqZjrrjAiCCEDzbVaK64wIgghA+xhjyuuMCGhkPGQMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnHxAbA/5opv5gghAF9eEAghA7msoAoLV/vvLgZNs8+En4UNs8+ElYVQL4T/hO+E34TFUGIPkAyM+KAEDL/8jPhYjPE40EkO5rKAAAAAAAAAAAAAAAAAABwM8WzM+DVWDIz5EECQdazMzMVTDIzMzMzs3NyXD7APhQpLV/+HD4ScjPhYjOExIRABKAb89AyYBA+wAAWG1wyMv/cFiAQPRDWHFYgED0FgHIy/9yWIBA9EPI9ADJAcjPhID0APQAz4HJARb4KMjO+ErQAcnbPBQCFiGLOK2zWMcFioriFhUBCAHbPMkXASYB1NQwEtDbPMjPjits1hLMzxHJFwFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOGAEEiAEjAyYw+Eby4Ez4Qm7jANHbPNs8f/hnHyMbAlAw+EJu4wD4RvJz1NTU1NHQ1NTR+ABVAvhsWPhtAfhu+G/4ats8f/hnHBsAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PMAW8iAssf9ADMVTDIzMzMy3/Nye1UAhbtRNDXScIBio6A4h8dBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0jIyMeAjSI+G6I+G9w+HCAQPQO8r3XC//4YnD4Y3D4cCMjAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NN/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIyIAFHNvbCAwLjQ5LjAAAA==",
    code: "te6ccgECIQEABHIABCSK7VMg4wMgwP/jAiDA/uMC8gseBAEgAQACAvztRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAY4agQIA1xgg+QEB0wABlNP/AwGTAvhC4vkQ8qiV0wAB8nri0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwEZAwEO2zz4R27yfAUDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8HR0FAiggghA+xhjyu+MCIIIQTk6xMLvjAgsGAiggghBFDxGWuuMCIIIQTk6xMLrjAgkHA5Yw+Eby4Ez4Qm7jAPpBldTR0PpA39cNf5XU0dDTf9/R2zwhjh8j0NMB+kAwMcjPhyDOcc8LYQHIz5M5OsTCzs3JcPsAkTDi4wB/+GccCBgCbo0IYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNs8Wts8+QBwyM+GQMoHy//J0DEQDwOYMPhG8uBM+EJu4wDU1w3/ldTR0NP/39HbPCGOKCPQ0wH6QDAxyM+HIM6NBAAAAAAAAAAAAAAAAAxQ8RlozxbL/8lw+wCRMOLjAH/4ZxwKGAEM2zz5AGwhEAROIIIL7aabuuMCIIIQGHqZjrrjAiCCEDzbVaK64wIgghA+xhjyuuMCFxYMFgMqMPhG8uBM+EJu4wDU1NHbPNs8f/hnHA0YA/5opv5gghAF9eEAghA7msoAoLV/vvLgZNs8+En4UNs8+ElYVQL4T/hO+E34TFUGIPkAyM+KAEDL/8jPhYjPE40EkO5rKAAAAAAAAAAAAAAAAAABwM8WzM+DVWDIz5EECQdazMzMVTDIzMzMzs3NyXD7APhQpLV/+HD4ScjPhYjOEA8OABKAb89AyYBA+wAAWG1wyMv/cFiAQPRDWHFYgED0FgHIy/9yWIBA9EPI9ADJAcjPhID0APQAz4HJARb4KMjO+ErQAcnbPBECFiGLOK2zWMcFioriExIBCAHbPMkUASYB1NQwEtDbPMjPjits1hLMzxHJFAFm1YsvSkDXJvQE0wkxINdKkdSOgOKLL0oY1yYwAcjPi9KQ9ACAIM8LCc+L0obMEszIzxHOFQEEiAEgAyYw+Eby4Ez4Qm7jANHbPNs8f/hnHCAYAlAw+EJu4wD4RvJz1NTU1NHQ1NTR+ABVAvhsWPhtAfhu+G/4ats8f/hnGRgAXvhQ+E/4TvhN+Ez4S/hK+EP4QsjL/8s/z4PMAW8iAssf9ADMVTDIzMzMy3/Nye1UAhbtRNDXScIBio6A4hwaBCpw7UTQ9AWI+GpwbW8C+GuI+GyI+G0gICAbAjSI+G6I+G9w+HCAQPQO8r3XC//4YnD4Y3D4cCAgAF7tRNDT/9M/0wAx1NMf9ARZbwIB1NTR0NTU1NN/0fhw+G/4bvht+Gz4a/hq+GP4YgAK+Eby4EwCCvSkIPShIB8AFHNvbCAwLjQ5LjAAAA==",
    codeHash: "c2cbaa4b0158e148223cb9a1df724bea9305c0007732ecacd9c7e3db9e4e3c54",
};
module.exports = { NFTMarketContract };