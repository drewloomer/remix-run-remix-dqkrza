import {
	vitePlugin as remix,
	cloudflareDevProxyVitePlugin as remixCloudflareDevProxy,
} from '@remix-run/dev';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { getLoadContext } from './load-context';

export default defineConfig({
	base: '/dashboard/',
	plugins: [
		remixCloudflareDevProxy({ getLoadContext }),
		remix({
			basename: '/dashboard/',
			manifest: true,
		}),
		tsconfigPaths(),
	],
});
