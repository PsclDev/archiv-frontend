import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter({
            fallback: 'index.html'
        }),
        alias: {
            '@components': path.resolve('./src/components'),
            '@stores': path.resolve('./src/stores')
        },
        prerender: {
            default: true
        }
    }
};

export default config;
