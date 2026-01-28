import esbuild from 'esbuild';
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isDev = process.argv.includes('--dev');

const assetLoader = ['.ttf', '.svg', '.eot', '.woff', '.woff2'].reduce((acc, ext) => {
    acc[ext] = 'file';
    return acc;
}, {});

const jsOptions = {
    entryPoints: ['./src/index.ts'],
    bundle: true,
    outdir: 'dist/js',
    format: 'esm',
    minify: true,
    sourcemap: isDev,
    loader: { '.ts': 'ts', '.tsx': 'tsx', ...assetLoader },
    logLevel: isDev ? 'info' : 'error',
};

const cssOptions = {
    entryPoints: ["./src/style.css"],
    bundle: true,
    minify: true,
    sourcemap: isDev,
    outdir: path.resolve(__dirname, 'dist/css'),
    entryNames: 'style',
}

const copyAssets = async () => {
    fse.ensureDirSync(path.resolve(__dirname, 'dist/js'));

    await fse.copy(
        'node_modules/monaco-editor/esm/vs',
        'dist/js/monaco-editor/vs'
    )
};

const build = async (options, watch = false) => {
    const ctx = await esbuild.context(options);
    if (watch) {
        await ctx.watch();
        console.log(`Watching ${options.outdir}...`);
    } else {
        await ctx.rebuild();
        await ctx.dispose();
        console.log(`Built ${options.outdir}`);
    }
};

(async () => {
    await Promise.all([
        build(jsOptions, isDev),
        build(cssOptions, isDev),
        copyAssets()
    ]);
})();