# TypeError: Cannot read properties of undefined (reading '#props') if destructuring SelectQueryBuilder

```
$ node --version
v18.17.1
```

reproducing

```
pnpm run db
pnpm run dev

# expected output

> kysely-repro@1.0.0 dev /path/to/kysely-repro
> rm -rf dist && tsc && node dist

TypeError: Cannot read properties of undefined (reading '#props')
    at where (/path/to/kysely-repro/node_modules/.pnpm/kysely@0.27.4/node_modules/kysely/dist/cjs/query-builder/select-query-builder.js:39:21)
    at /path/to/kysely-repro/dist/index.js:8:35
    at SelectQueryBuilderImpl.$if (/path/to/kysely-repro/node_modules/.pnpm/kysely@0.27.4/node_modules/kysely/dist/cjs/query-builder/select-query-builder.js:285:20)
    at Object.<anonymous> (/path/to/kysely-repro/dist/index.js:8:10)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47
```
