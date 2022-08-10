import { defineConfig } from 'vite'
import PrintUrlsPlugin from 'vite-plugin-print-urls'

export default defineConfig({
    plugins: [
        PrintUrlsPlugin()
    ]
})
