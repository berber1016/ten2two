module.exports = {
    presets: ['@babel/preset-react', ['@babel/preset-env'], '@babel/preset-typescript'],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: false }],
        ['@babel/plugin-transform-modules-commonjs'],
        '@babel/plugin-transform-runtime', ["formatjs",
            {
                "idInterpolationPattern": "[sha512:contenthash:base64:6]",
                "ast": true
            }
        ],
    ],
};