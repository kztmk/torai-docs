# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
npm ci
```

## Local Development

Japanese:

```bash
npm run start
# or: npm run start:ja
```

English:

```bash
npm run start:en
```

Docusaurus development mode serves one locale at a time. The locale switcher
can therefore show a not-found page when using `start`, `start:ja`, or
`start:en`. To verify the header locale switcher with both locales available,
use the production preview instead:

```bash
npm run preview
```

The development commands support live reload. The production preview builds
both Japanese and English before serving the generated site.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true yarn deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
