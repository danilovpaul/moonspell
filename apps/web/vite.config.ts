import path from 'node:path'
import { defineConfig } from 'vite'
import pluginVue from '@vitejs/plugin-vue'

export default defineConfig({
	plugins: [pluginVue()],
	resolve: {
		alias: {
			'~': path.resolve('src')
		}
	}
})