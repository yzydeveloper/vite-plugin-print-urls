# vite-plugin-print-urls

print server urls

---

before use

```bash
下午1:12:56 [vite] page reload index.html
下午1:13:01 [vite] hmr update index.css
```

after use

```bash
下午1:12:56 [vite] page reload index.html
    > Local: http://localhost:3000/
    > Network: use `--host` to expose
下午1:13:01 [vite] hmr update index.css
    > Local: http://localhost:3000/
    > Network: use `--host` to expose
```

## Install

```bash
npm i -D vite-plugin-print-urls
```

Add plugin to your `vite.config.ts`:

```typescript
import PrintUrlsPlugin from 'vite-plugin-print-urls'

export default defineConfig(() => {
    return {
        plugins: [
            PrintUrlsPlugin()
        ],
    }
})
```

