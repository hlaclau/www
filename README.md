# www

Source of my personal website, [hlaclau.fr](https://hlaclau.fr).

Built with [Astro](https://astro.build), [MDX](https://mdxjs.com) and [Tailwind CSS](https://tailwindcss.com).

## Getting started

Tooling is managed with [mise](https://mise.jdx.dev), which pins the [Bun](https://bun.sh) version.

```sh
mise install       # install the pinned toolchain
mise run install   # install dependencies
mise run dev       # start the dev server on http://localhost:4321
```

## Tasks

| Task                        | Description                                 |
| --------------------------- | ------------------------------------------- |
| `mise run dev`              | Start the dev server                        |
| `mise run build`            | Build the site into `dist/`                 |
| `mise run preview`          | Preview the production build                |
| `mise run lint`             | Lint with oxlint                            |
| `mise run fmt`              | Format with Prettier                        |
| `mise run check`            | Lint and check formatting                   |
| `mise run test:e2e:install` | Install Playwright browsers                 |
| `mise run test:e2e`         | Build the site and run the end-to-end tests |

## Project structure

```text
src/
├── components/   # page sections and UI components
├── constants/    # site metadata (name, links, SEO keywords)
├── content/      # MDX content rendered on the homepage
├── layouts/      # base and homepage layouts
├── lib/          # helpers
├── pages/        # routes (index, 404)
└── styles/       # global CSS
e2e/              # Playwright tests
public/           # static assets
```

Most text lives in `src/content/description.mdx`, and site-wide metadata in `src/constants/site.ts`.

## Quality

- **Pre-commit hooks** ([lefthook](https://lefthook.dev)) lint and format staged files.
- **CI** runs lint, format check and the Playwright e2e suite on every pull request to `master`.

The build reads the date of the last git commit to set `lastmod` in the sitemap, so clone with full history if you need it to be accurate.
