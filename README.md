# Next + Bright

This repo is for an exercise in my React course, [The Joy of React](https://joyofreact.com/).

**NOTE:** When installing dependencies for this one, you’ll need to use the `--legacy-peer-deps` flag. This is because the `bright` NPM package has not updated its peer dependencies to be compatible with the newly-released React 19. There isn’t _actually_ an issue — Bright still works with React 19 — but NPM is very strict by default when it comes to peer dependencies.

See instructions here:

## Running a development server

First, install the dependencies:

```bash
$ npm install --legacy-peer-deps
```

Then, start a local development server:

```bash
$ npm run dev
```
