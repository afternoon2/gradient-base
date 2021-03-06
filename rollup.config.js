import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import commonjs from 'rollup-plugin-commonjs'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import eslintConf from './.eslintrc.json'
import { terser } from 'rollup-plugin-terser'

const babelConf = {
    exclude: ['/node_modules/'],
    plugins: ['external-helpers']
}

export default {
    input: './index.js',
    external: ['chroma-js'],
    globals: {
        'chroma-js': 'chroma'
    },
    output: [
        {
            extend: true,
            format: 'umd',
            file: './gradient-base.js',
            name: 'Base'
        }
    ],
    watch: {
        include: 'src/**'
    },
    plugins: [
        resolve(),
        eslint(eslintConf),
        babel(babelConf),
        cleanup({
            comments: 'none',
            extensions: '.js'
        }),
        commonjs(),
        terser()
    ]
}