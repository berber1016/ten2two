module.exports = {
    env: {
        // 支持浏览器环境
        browser: true,
        // 识别 CommonJS
        node: true,
        // 识别 ES 的代码，使用 ECMAScript 2021 自动设置 ecmaVersion parser 为 12，
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended"
    ],
    overrides: [{
            files: ["**/*.{js,jsx}"], // 只处理 js 和 jsx 文件
            parser: "@babel/eslint-parser", // 使用 babel 来解析 js 文件
            parserOptions: {
                sourceType: "module", // 支持 import/export
                allowImportExportEverywhere: false,
                ecmaFeatures: {
                    globalReturn: false,
                },
            },
        },
        // 处理 TS 文件
        {
            files: ["**/*.{ts,tsx}", "**/*.{js,jsx}"], // 只处理 ts 和 js 文件
            excludedFiles: [".eslintrc.js"], // 这里禁用了 .eslintrc.js 的类型检查
            parser: "@typescript-eslint/parser", // 能看懂 TypeScript
            parserOptions: {
                project: ["./tsconfig.json"], // 告诉 eslint：tsconfig 在哪
            },
            extends: [
                // typescript-eslint 的推荐规则，只是这些最佳规则都是针对 TS 的
                "plugin:@typescript-eslint/recommended",
                // tsconfig.json 里 Type Checking 的推荐规则
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            plugins: [
                // 使用 typescript x eslint 的插件
                "@typescript-eslint",
            ],
        },
    ],
};