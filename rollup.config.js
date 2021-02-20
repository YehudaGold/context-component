import babelPlugin from '@rollup/plugin-babel';
import nodeResolverPlugin from '@rollup/plugin-node-resolve';

import pkg from './package.json';

const externals = [].concat(Object.keys(pkg.dependencies)).concat(Object.keys(pkg.peerDependencies));

export default {
    external: path => externals.some(external => path.startsWith(external)),
    input: 'src',
    output: [{
        file: 'dist/bundle.esm.js',
        format: 'esm',
        sourcemap: true
    },
    {
        file: 'dist/bundle.cjs.js',
        format: 'cjs',
        sourcemap: true
    }],
    plugins: [
        babelPlugin({
            babelHelpers: 'runtime'
        }),
        nodeResolverPlugin({
            extensions: ['.js', '.jsx']
        })
    ]
};