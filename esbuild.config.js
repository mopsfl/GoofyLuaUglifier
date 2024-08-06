const esbuild = require('esbuild');
const { argv } = require('process');

const isDev = argv.includes('--dev');

const jsOptions = {
    entryPoints: ['./index.ts'],
    bundle: true,
    outdir: 'dist/js',
    format: 'esm',
    minify: true,
    sourcemap: true,
    loader: {
        '.ts': 'ts',
        '.tsx': 'tsx',
        '.ttf': 'file',
        '.svg': 'file',
        '.eot': 'file',
        '.woff': 'file',
        '.woff2': 'file',
    },
    logLevel: isDev ? 'info' : 'error'
};

const cssOptions = {
    entryPoints: ['./styleImport.js'],
    bundle: true,
    outdir: 'dist/css',
    minify: true,
    loader: {
        '.css': 'css',
    },
    entryNames: 'style',
    logLevel: isDev ? 'info' : 'error'
};

esbuild.buildSync(jsOptions)
esbuild.buildSync(cssOptions)

if (isDev) {
    esbuild.context({ ...jsOptions }).then(r => r.watch())
    esbuild.context({ ...cssOptions }).then(r => r.watch())
}