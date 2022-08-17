import type { Plugin, HmrContext } from 'vite'

const VITE_PLUGIN_NAME = 'vite-plugin-print-urls'

function PluginDecorator(): Plugin {
    let hmrContext: HmrContext
    return {
        name: VITE_PLUGIN_NAME,
        enforce: 'pre',
        handleHotUpdate(ctx) {
            hmrContext = ctx
        },
        configureServer({ watcher, printUrls, config }) {
            watcher.on('all', (_, file) => {
                const queue = config.plugins.map(plugin => (plugin.handleHotUpdate && hmrContext ? plugin.handleHotUpdate(hmrContext) : Promise.resolve()))

                Promise.all(queue).then((fullModules) => {
                    const filteredModules = fullModules.filter((item) => item && item.length)

                    if (filteredModules.length || hmrContext?.modules.length) {
                        // hmr update
                        config.logger.info('')
                        printUrls()
                    }

                    if (!hmrContext?.modules.length) {
                        if (file.endsWith('.html')) {
                            // page reload
                            config.logger.info('')
                            printUrls()
                        }
                    }
                })
            })
        }
    }
}

export default PluginDecorator
