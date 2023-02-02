# zod schema import / tRPC bug

When importing zod schema on the client that are exported from the same file as a tRPC router in the backend, a runtime error occurs:

```
Unhandled Runtime Error
Error: You're trying to use @trpc/server in a non-server environment. This is not supported by default.
```

<img width="1460" alt="image" src="https://user-images.githubusercontent.com/8353666/216389364-7f69d2d9-6d62-4a24-a9f4-87fab817935d.png">

To reproduce:

1. install packages: `pnpm i`
2. start dev server: `pnpm dev`
3. visit a working page, where the zod schema is exported from its own file: `http://localhost:3000/working`
4. visit a broken page, where the zod schema is exported from the same file as a tRPC router: `http://localhost:3000/broken`
