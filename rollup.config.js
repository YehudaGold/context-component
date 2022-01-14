import babelPlugin from '@rollup/plugin-babel';
import typescript from '@rollup/plugin-typescript';

import pkg from './package.json';

const externals = [].concat(Object.keys(pkg.dependencies)).concat(Object.keys(pkg.peerDependencies));

const generateConfig = format => ({
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src',
    output: {
        file: `dist/bundle.${format}.js`,
        format,
        sourcemap: true
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
        babelPlugin({
            babelHelpers: 'runtime',
            plugins: [
                ['@babel/plugin-transform-runtime', {corejs: {version: 3}, useESModules: format === 'esm'}]
            ],
            presets: [
                ['@babel/preset-env', {loose: true, modules: false, shippedProposals: true}],
                '@babel/preset-react'
            ]
        })
    ]
});

export default ['esm', 'cjs'].map(generateConfig);