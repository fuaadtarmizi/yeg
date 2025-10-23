This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploying to GitHub Pages (static export)

This project can be published to GitHub Pages by exporting a static build and deploying the `out/` directory to the `gh-pages` branch. A GitHub Actions workflow (in `.github/workflows/deploy-gh-pages.yml`) is included and will run on every push to `main`.

Steps to deploy from your machine:

1. Ensure your project does not require server-side rendering features (static export only).
2. Commit and push your changes to `main`.
3. Actions will run automatically. You can also test locally:

```powershell
npm run build
npm run export
# preview the out/ folder using a simple static server
# install http-server globally if needed: npm i -g http-server
# then run:
# http-server ./out -p 8080
```

4. After Actions finishes, enable GitHub Pages in repository Settings → Pages and choose the `gh-pages` branch as source. Your site will be available at `https://<your-username>.github.io/<repo>`.

If your app relies on server-side rendering or Next-specific runtime features, consider deploying to Vercel or another platform that supports Next.js server/runtime.

