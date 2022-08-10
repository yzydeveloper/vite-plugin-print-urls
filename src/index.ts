import type { Plugin } from 'vite'

const VITE_PLUGIN_NAME = 'vite-plugin-print-urls'

function PluginDecorator(): Plugin {
    return {
        name: VITE_PLUGIN_NAME
    }
}

export default PluginDecorator
