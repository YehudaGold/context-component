import babelPlugin from '@rollup/plugin-babel';
import nodeResolverPlugin from '@rollup/plugin-node-resolve';

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
        babelPlugin({
            babelHelpers: 'runtime',
            plugins: [
                '@babel/plugin-proposal-class-properties',
                ['@babel/plugin-transform-runtime', {corejs: {version: 3}, useESModules: format === 'esm'}]
            ],
            presets: [
                ['@babel/preset-env', {loose: true, modules: false}],
                '@babel/preset-react'
            ]
        }),
        nodeResolverPlugin({extensions: ['.js', '.jsx']})
    ]
});

export default ['esm', 'cjs'].map(generateConfig);