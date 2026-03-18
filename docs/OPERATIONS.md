# CEFA Fortaleza Website - Operations Guide

Operational documentation for the [cefafortaleza.org.br](https://cefafortaleza.org.br) website.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Environment Variables](#environment-variables)
- [Sanity CMS](#sanity-cms)
- [Content Model](#content-model)
- [External Services](#external-services)
- [Deployment](#deployment)
- [Cron Jobs](#cron-jobs)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Vercel                               │
│  ┌──────────────────────┐  ┌─────────────────────────────┐  │
│  │   Next.js Frontend   │  │   Serverless Functions       │  │
│  │   (Pages Router)     │  │   /api/sendEmail             │  │
│  │   SSR + Static       │  │   /api/instagram             │  │
│  │   localhost:3000      │  │   /api/instagram/refreshToken│  │
│  └──────────┬───────────┘  └──────┬──────────┬────────────┘  │
│             │                     │          │               │
└─────────────┼─────────────────────┼──────────┼───────────────┘
              │                     │          │
   ┌──────────▼──────────┐  ┌──────▼───┐  ┌───▼──────────────┐
   │   Sanity CMS        │  │ AWS SES  │  │ Supabase         │
   │   Content API       │  │ (SMTP)   │  │ Instagram tokens │
   │   pr8kaaqe          │  │ sa-east-1│  │                  │
   └─────────────────────┘  └──────────┘  └───┬──────────────┘
                                              │
                                   ┌──────────▼──────────┐
                                   │ Instagram Graph API │
                                   │ Feed + Token Refresh│
                                   └─────────────────────┘

   ┌─────────────────────────────┐
   │   Sanity Studio             │
   │   cefa.sanity.studio        │
   │   (Hosted by Sanity)        │
   └─────────────────────────────┘
```

**Monorepo structure:**

| Directory | What                        | Tech                          |
|-----------|-----------------------------|-------------------------------|
| `web/`    | Public-facing website       | Next.js 14, React 18, Tailwind CSS, TypeScript |
| `studio/` | Content management backend  | Sanity v3                     |

---

## Prerequisites

- **Node.js** (LTS recommended)
- **Yarn** (package manager for this project — do not use npm)
- Access to the following services (see [External Services](#external-services)):
  - Sanity project `pr8kaaqe`
  - Vercel project
  - AWS SES credentials
  - Supabase project
  - Instagram Graph API app

---

## Local Development

### First-time setup

```bash
# Clone the repository
git clone git@github.com:cefafortaleza/website.git
cd website

# Install root dependencies
yarn install

# Install web dependencies
cd web && yarn install && cd ..

# Install studio dependencies
cd studio && yarn install && cd ..

# Set up environment variables (see section below)
cp web/.env.local.example web/.env.local   # if an example file exists
# Otherwise, create web/.env.local manually with the required variables
```

### Running locally

```bash
# Run both web and studio in parallel
yarn dev

# Or run them individually:
cd web && yarn dev       # Next.js at http://localhost:3000
cd studio && yarn dev    # Sanity Studio at http://localhost:3333
```

### Building

```bash
cd web && yarn build     # Next.js production build
cd studio && yarn build  # Sanity Studio build
```

### Linting

```bash
cd web && yarn lint      # ESLint with next/core-web-vitals rules
```

There is no test framework configured in this project.

### Code style

| Setting           | Value                  |
|-------------------|------------------------|
| Quotes            | Single (`'`)           |
| Semicolons        | Yes                    |
| Bracket spacing   | No (`{a}` not `{ a }`) |
| TypeScript strict | Yes (web)              |
| Formatter         | Prettier (`.prettierrc`) |
| Linter            | ESLint (Airbnb at root, `next/core-web-vitals` in web, `@sanity/eslint-config-studio` in studio) |

---

## Environment Variables

All environment variables are set in **Vercel** for production and in `web/.env.local` for local development.

| Variable               | Used by          | Description                                         |
|------------------------|------------------|-----------------------------------------------------|
| `SMTP_USERNAME`        | `sendEmail` API  | AWS SES SMTP username                               |
| `SMTP_PASSWORD`        | `sendEmail` API  | AWS SES SMTP password                               |
| `SMTP_RECEIVER`        | `sendEmail` API  | Email address that receives contact form submissions |
| `SANITY_URL`           | Page data fetches| Sanity API endpoint (used in `getServerSideProps`)   |
| `SUPABASE_PROJECT_URL` | Instagram APIs   | Supabase project URL                                |
| `SUPABASE_API_KEY`     | Instagram APIs   | Supabase anonymous/service key                      |

### Setting up in Vercel

1. Go to the Vercel project dashboard
2. Settings > Environment Variables
3. Add each variable for Production, Preview, and Development environments

### Local `.env.local` example

```env
SMTP_USERNAME=your-ses-smtp-username
SMTP_PASSWORD=your-ses-smtp-password
SMTP_RECEIVER=contato@cefafortaleza.org.br
SANITY_URL=https://pr8kaaqe.api.sanity.io/v2023-02-21/data/query/production
SUPABASE_PROJECT_URL=https://your-project.supabase.co
SUPABASE_API_KEY=your-supabase-anon-key
```

---

## Sanity CMS

### Access

| Resource        | URL                                                       |
|-----------------|-----------------------------------------------------------|
| Studio (live)   | [cefa.sanity.studio](https://cefa.sanity.studio)          |
| Studio (local)  | http://localhost:3333                                      |
| Project manager | [sanity.io/manage](https://www.sanity.io/manage/personal/project/pr8kaaqe) |
| GROQ playground | Studio > Vision tab (locally or on cefa.sanity.studio)    |

### Key identifiers

| Setting    | Value        |
|------------|--------------|
| Project ID | `pr8kaaqe`   |
| Org ID     | `odmKIW14s`  |
| Dataset    | `production` |
| API version| `2023-02-21` |
| CDN        | Enabled      |

### Deploying Studio changes

When you modify schemas or Studio configuration:

```bash
cd studio

# Deploy the Studio UI (hosted at cefa.sanity.studio)
yarn deploy

# If you changed schemas that affect the GraphQL API:
yarn deploy-graphql
```

### Managing users

Sanity user access is managed at [sanity.io/manage](https://www.sanity.io/manage/personal/project/pr8kaaqe) under Members. Content editors need at least the "Editor" role.

---

## Content Model

All content is managed through Sanity Studio. Each document type maps to a page on the website.

### Document types

#### `homepage` — Pagina Inicial
The homepage content. **Single document.**

| Field         | Type              | Description                              |
|---------------|-------------------|------------------------------------------|
| `slides`      | Array of objects  | Hero carousel: quote, author, image, text color (black/white) |
| `bannerOne`   | Object            | Musical group banner: title, button text, link, image |
| `maisDoCefa`  | Portable Text     | "More about CEFA" rich text section      |
| `bannerTwo`   | Object            | Library banner: title, button text, link, image |
| `livraria`    | Portable Text     | Library description section              |

#### `about` — Sobre o CEFA
About page with institutional info. **Single document.**

| Field          | Type              | Description                              |
|----------------|-------------------|------------------------------------------|
| `presentation` | Object            | Title + rich text description            |
| `board`        | Object            | Three arrays: `diretoria` (executive board), `conselho` (fiscal council), `coordenadores` (coordinators). Each entry has title, name, email. |
| `estatuto`     | File              | Uploaded PDF of the organization's statute |
| `bylaws`       | File              | Uploaded PDF of the internal bylaws      |

#### `activitiesDoc` — Atividades do CEFA
All activities and sub-activities. **Single document.**

| Field                    | Type              | Description                          |
|--------------------------|-------------------|--------------------------------------|
| `activitiesList`         | Array of objects  | Each has: title, description (rich text), optional sub-activities (title, subtitle, description) |
| `activitiesMobileImage`  | Image             | Vertical banner image (mobile)       |
| `activitiesDesktopImage` | Image             | Horizontal banner image (desktop)    |

#### `library` — Biblioteca
Library page. **Single document.**

| Field     | Type          | Description            |
|-----------|---------------|------------------------|
| `image`   | Image         | Banner image           |
| `title`   | String        | Page title             |
| `content` | Portable Text | Page body              |

#### `musicalGroup` — Grupo Musical
Musical group page. **Single document.** Same structure as `library`.

#### `reports` — Boletins CEFA
Yearly bulletins/newsletters. **Single document.**

| Field  | Type              | Description                                   |
|--------|-------------------|-----------------------------------------------|
| `year` | Array of objects  | Each year has a `year` string and a `reports` array (each report has a `title` and uploaded `file`) |

#### `information` — Informacoes Gerais
Site-wide information used in the footer/header. **Single document.**

| Field                    | Type   | Description                      |
|--------------------------|--------|----------------------------------|
| `socialMedia.instagram`  | String | Instagram username               |
| `socialMedia.facebook`   | String | Facebook username                |
| `socialMedia.youtube`    | String | YouTube channel URL              |
| `contact.phone`          | String | Phone number                     |
| `contact.mail`           | String | Contact email                    |
| `address.street`         | String | Street address with number       |
| `address.neighborhood`   | String | Neighborhood                     |
| `address.city`           | String | City                             |
| `address.cep`            | String | Postal code (CEP)                |
| `instagramHashtag`       | String | Main Instagram hashtag           |
| `instagramEventsHashtag` | String | Events Instagram hashtag         |

---

## External Services

### Sanity CMS

**What it does:** Stores and serves all website content (text, images, files).

**How the website uses it:** Pages call the Sanity API in `getServerSideProps` (or `getStaticProps`) using the client configured in `web/sanityClient.ts`. Rich text blocks are rendered with `@portabletext/react`.

**Management:** [sanity.io/manage](https://www.sanity.io/manage/personal/project/pr8kaaqe)

### Vercel

**What it does:** Hosts the Next.js frontend, runs serverless API functions, and executes cron jobs.

**Deployment:** Automatic on push to `master` via Vercel's Git integration. Preview deployments are created for pull requests.

**Domains:** Production domain is `cefafortaleza.org.br`.

### AWS SES (Simple Email Service)

**What it does:** Sends contact form emails.

**Region:** `sa-east-1` (Sao Paulo)

**SMTP endpoint:** `email-smtp.sa-east-1.amazonaws.com:465` (TLS)

**From address:** `contato@cefafortaleza.org.br`

**How it works:** When someone submits the contact form on `/contato`, the form POSTs to `/api/sendEmail`, which uses nodemailer to send an email via SES SMTP to the address in `SMTP_RECEIVER`.

**If emails stop working:**
1. Check that `SMTP_USERNAME` and `SMTP_PASSWORD` are valid in Vercel env vars
2. Verify the SES sending identity (`contato@cefafortaleza.org.br`) is still verified in AWS Console > SES > Verified identities
3. Check if the SES account is still in production mode (not sandbox)
4. Check Vercel function logs for errors

### Supabase

**What it does:** Stores the Instagram Graph API access token.

**Database schema:** Single table `tokens` with one row:

| Column                 | Type   | Description           |
|------------------------|--------|-----------------------|
| `id`                   | int    | Always `1`            |
| `instagramAccessToken` | text   | Current access token  |

**Management:** Supabase dashboard (URL in `SUPABASE_PROJECT_URL`)

### Instagram Graph API

**What it does:** Provides the Instagram photo feed shown on the homepage.

**How it works:**
1. `/api/instagram` — Fetches recent media from `graph.instagram.com/me/media`, filters out videos, returns image posts with pagination
2. `/api/instagram/refreshToken` — Exchanges the current long-lived token for a new one (tokens expire after 60 days)

**Token lifecycle:**
- Instagram long-lived tokens are valid for **60 days**
- A Vercel cron job refreshes the token every **28 days** (well before expiry)
- The token is stored in Supabase and updated after each refresh
- If the cron fails twice in a row, the token could expire and the feed will break

---

## Deployment

### Web (Next.js)

Deployed automatically by **Vercel** on push to `master`.

```
Push to master → Vercel builds → Production deploy at cefafortaleza.org.br
Push to branch → Vercel builds → Preview deploy at unique URL
```

The Vercel project is configured via `vercel.json`:
- Framework: `nextjs`
- Build command: `next build`
- Clean URLs enabled (no `.html` extensions)

### Studio (Sanity)

Deployed manually:

```bash
cd studio

# Deploy the Studio UI to cefa.sanity.studio
yarn deploy

# Deploy GraphQL API (only if schemas changed)
yarn deploy-graphql
```

The Studio does **not** auto-deploy. After changing schemas in `studio/schemas/`, you must deploy manually.

---

## Cron Jobs

Configured in `vercel.json`:

| Endpoint                        | Schedule          | Description                      |
|---------------------------------|-------------------|----------------------------------|
| `/api/instagram/refreshToken`   | `0 0 */28 * *`    | Refreshes Instagram access token |

The schedule runs at midnight UTC every 28 days. You can check execution logs in the Vercel dashboard under the Functions tab.

### Manual token refresh

If the cron job fails and you need to refresh manually:

```bash
# Hit the endpoint directly (production)
curl -X GET https://cefafortaleza.org.br/api/instagram/refreshToken

# Or locally (with .env.local set up)
curl -X GET http://localhost:3000/api/instagram/refreshToken
```

If the token has already expired (60+ days without refresh), you'll need to generate a new long-lived token from the [Meta Developer Portal](https://developers.facebook.com/) and manually update it in Supabase:

1. Go to the Meta Developer Portal > your app > Instagram Basic Display > Generate Token
2. Exchange the short-lived token for a long-lived one
3. Update the token in Supabase: `UPDATE tokens SET "instagramAccessToken" = 'new-token-here' WHERE id = 1;`

---

## Troubleshooting

### Instagram feed not loading

1. **Check if the token is valid:**
   - Go to Supabase > Table Editor > `tokens` > check the `instagramAccessToken` value
   - Test it: `curl "https://graph.instagram.com/me?fields=id,username&access_token=TOKEN_HERE"`
   - If you get an error, the token has expired — follow the manual token refresh steps above

2. **Check Vercel cron logs:**
   - Vercel Dashboard > project > Functions > `/api/instagram/refreshToken`
   - Look for recent executions and errors

3. **Check Supabase connectivity:**
   - Verify `SUPABASE_PROJECT_URL` and `SUPABASE_API_KEY` are correct in Vercel env vars

### Contact form not sending emails

1. **Check Vercel function logs** for `/api/sendEmail` errors
2. **Verify AWS SES credentials** (`SMTP_USERNAME`, `SMTP_PASSWORD`) haven't been rotated
3. **Check SES sending limits** in AWS Console > SES > Account dashboard
4. **Verify sender identity** — `contato@cefafortaleza.org.br` must be verified in SES

### Content not updating on the website

1. **Check Sanity Studio** — is the content actually published? (Draft vs Published)
2. **CDN cache** — The Sanity client uses CDN (`useCdn: true`). Content updates may take a few minutes to propagate. For immediate updates, the API version or CDN setting would need to change.
3. **Vercel cache** — If using ISR or SSG, you may need to redeploy or wait for revalidation

### Build failures

```bash
# Reproduce locally
cd web && yarn build

# Common issues:
# - TypeScript strict mode errors
# - Missing environment variables (build can fail if SANITY_URL is not set)
# - Sanity schema changes that break queries
```

### Studio deploy fails

```bash
cd studio && yarn deploy

# If it fails:
# - Check you're authenticated: npx sanity login
# - Verify project ID matches in sanity.config.ts and sanity.cli.ts
# - Check for schema validation errors: npx sanity schema validate
```
