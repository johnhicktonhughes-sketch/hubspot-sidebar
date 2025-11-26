# HubSpot Sidebar (Vercel-ready)

This repository includes a minimal Node.js serverless API that you can deploy on Vercel. It expects a `HUBSPOT_API_KEY` environment variable configured in your Vercel project settings.

## Local development

1. Install the Vercel CLI if you don't have it: `npm i -g vercel`.
2. Create a `.env` file and set `HUBSPOT_API_KEY=your-api-key`.
3. Run `vercel dev` to start the local serverless environment.

## Deploy to Vercel

1. Run `vercel` and follow the prompts to link or create a project.
2. In the Vercel dashboard, add `HUBSPOT_API_KEY` under **Settings → Environment Variables**.
3. Deploy. The root route (`/`) is routed to the `api/sidebar` serverless function.

## API

`GET /api/sidebar` (or `/`)

- Returns JSON confirming the function is running.
- Responds with an error if `HUBSPOT_API_KEY` is not configured.

Extend the handler in `api/sidebar.js` to integrate with HubSpot using the provided API key.
