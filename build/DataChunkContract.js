const DataChunkContract = {
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
                        "name": "chunk",
                        "type": "bytes"
                    }
                ],
                "outputs": []
            },
            {
                "name": "getInfo",
                "inputs": [],
                "outputs": [
                    {
                        "name": "addrData",
                        "type": "address"
                    },
                    {
                        "name": "chunkNumber",
                        "type": "uint128"
                    },
                    {
                        "name": "chunk",
                        "type": "bytes"
                    }
                ]
            }
        ],
        "data": [
            {
                "key": 1,
                "name": "_code",
                "type": "cell"
            },
            {
                "key": 2,
                "name": "_addrData",
                "type": "address"
            },
            {
                "key": 3,
                "name": "_chunkNumber",
                "type": "uint128"
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
                "name": "_code",
                "type": "cell"
            },
            {
                "name": "_addrData",
                "type": "address"
            },
            {
                "name": "_chunkNumber",
                "type": "uint128"
            },
            {
                "name": "_chunk",
                "type": "bytes"
            }
        ]
    },
    tvc: "te6ccgECEwEAAkgAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBCSK7VMg4wMgwP/jAiDA/uMC8gsQBQQSAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CwYDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8Dw8GAiggghAL2k4VuuMCIIIQPBzCprrjAgkHA3ow+Eby4Ez4Qm7jANHbPCOOIyXQ0wH6QDAxyM+HIM5xzwthXiDIz5Lwcwqazst/zM3JcPsAkl8D4uMAf/hnDggKAAz4S/hM+E0CPDD4Qm7jAPhG8nPU0fhJ+EvHBfLgZPgA+G3bPH/4ZwsKADz4TfhM+Ev4SvhD+ELIy//LP8+DzM5ZyMt/zM3J7VQCFu1E0NdJwgGKjoDiDgwCwHDtRND0BXEhgED0D46A3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GtzIYBA9A6T1wt/kXDi+GyI+G2AQPQO8r3XC//4YnD4Yw0SAQKIEgBA7UTQ0//TP9MAMdT6QNTR0NN/1NH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oRIRABRzb2wgMC40OS4wAAA=",
    code: "te6ccgECEAEAAhsABCSK7VMg4wMgwP/jAiDA/uMC8gsNAgEPAubtRNDXScMB+GaNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT4aSHbPNMAAZ+BAgDXGCD5AVj4QvkQ8qje0z8B+EMhufK0IPgjgQPoqIIIG3dAoLnytPhj0x8B+CO88rnTHwHbPPhHbvJ8CAMDWO1E0NdJwwH4ZiLQ0wP6QDD4aak4ANwhxwDjAiHXDR/yvCHjAwHbPPhHbvJ8DAwDAiggghAL2k4VuuMCIIIQPBzCprrjAgYEA3ow+Eby4Ez4Qm7jANHbPCOOIyXQ0wH6QDAxyM+HIM5xzwthXiDIz5Lwcwqazst/zM3JcPsAkl8D4uMAf/hnCwUHAAz4S/hM+E0CPDD4Qm7jAPhG8nPU0fhJ+EvHBfLgZPgA+G3bPH/4ZwgHADz4TfhM+Ev4SvhD+ELIy//LP8+DzM5ZyMt/zM3J7VQCFu1E0NdJwgGKjoDiCwkCwHDtRND0BXEhgED0D46A3/hqciGAQPQOjiSNCGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATf+GtzIYBA9A6T1wt/kXDi+GyI+G2AQPQO8r3XC//4YnD4YwoPAQKIDwBA7UTQ0//TP9MAMdT6QNTR0NN/1NH4bfhs+Gv4avhj+GIACvhG8uBMAgr0pCD0oQ8OABRzb2wgMC40OS4wAAA=",
    codeHash: "4a30480406892cea40f2885af83b4e7b14fa8037db1a229102eaa81d98c39226",
};
module.exports = { DataChunkContract };