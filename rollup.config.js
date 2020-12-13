import babelPlugin from '@rollup/plugin-babel';
import nodeResolverPlugin from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const externals = [].concat(Object.keys(pkg.dependencies)).concat(Object.keys(pkg.peerDependencies));

export default {
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src',
    output: {
        file: 'dist/bundle.js',
        format: 'esm'
    },
    plugins: [
        babelPlugin({
            babelHelpers: 'runtime',
            skipPreflightCheck: true
        }),
        nodeResolverPlugin({
            browser: true,
            extensions: ['.js', '.jsx']
        })
    ]
};