# Website

This repository holds the codebase used to maintain our website.

[![Netlify Status](https://api.netlify.com/api/v1/badges/248a0c72-dd76-4cc8-93ff-83671db92a73/deploy-status)](https://app.netlify.com/sites/festive-mcclintock-1283c8/deploys)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

## Prerequisites

- Node v8.2.0 or later
- [Gatsby CLI](https://www.gatsbyjs.org/docs/)
- [Netlify CLI](https://github.com/netlify/cli)

### Running it locally

Pulldown a local copy of the Github repository Netlify created for you, with the name you specified in the previous step
```
$ git clone git@github.com:cefafortaleza/website.git
$ cd website
$ yarn
$ npm install -g netlify-cli
$ bpm install
$ npm run build
$ netlify dev # or ntl dev
```

## Purgecss

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma builds are usually ~170K but reduced 90% by purgecss.
