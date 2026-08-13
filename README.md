# Duc Anh Nguyen Portfolio

Technical Precision portfolio for Duc Anh Nguyen, a Java Backend Developer focused on secure REST APIs, Spring Boot services, PostgreSQL persistence and cloud-ready deployments.

## Live Sections

- `index.html` - home page, hero, technology conveyor and featured projects.
- `project-ai-study-assistant.html` - AI Study Assistant project detail.
- `project-central-kitchen.html` - Central Kitchen System project detail.
- `stack-contact.html` - technical stack, certifications and contact.

## Tech Stack

- HTML5
- CSS3 with custom design tokens
- Vanilla JavaScript
- Self-hosted Hanken Grotesk font files
- Static assets for project screenshots and CV
- Vercel static hosting configuration

## Features

- Technical Precision visual system with light and dark theme support.
- Responsive portfolio layout for desktop and mobile.
- Featured project pages with real product screenshots.
- Technology logo conveyor for backend, testing and operations tools.
- Certification detail section.
- Static contact form that opens Gmail compose with a prepared message.
- Vercel-ready routing with clean URLs.

## Project Structure

```text
.
|-- assets/
|   |-- central-kitchen/
|   |-- project-detail/
|   |-- Duc-Anh-Nguyen-CV.pdf
|   `-- duc-anh-portrait.png
|-- index.html
|-- project-ai-study-assistant.html
|-- project-central-kitchen.html
|-- stack-contact.html
|-- script.js
|-- server.mjs
|-- styles.css
|-- vercel.json
`-- package.json
```

## Local Development

Install dependencies if needed:

```bash
npm install
```

Start the local server:

```bash
npm run dev
```

The server starts at `http://localhost:5173` or the next available port.

You can also run the local launcher on macOS:

```bash
./start-localhost.command
```

## Build Check

This is a static site, so no bundling step is required. The build command exists for Vercel compatibility:

```bash
npm run build
```

Expected output:

```text
Static portfolio: no build step required
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Open Vercel and import the GitHub repository.
3. Use these settings:

```text
Framework Preset: Other
Build Command: npm run build
Output Directory: .
```

4. Deploy.

The `vercel.json` file configures:

- Clean URLs for project pages.
- Static output from the repository root.
- Long-term cache headers for files under `/assets`.

## Suggested Domain Setup

If `ducanh.space` is already used by another project, use a free subdomain such as:

```text
portfolio.ducanh.space
```

On Namecheap, add a CNAME record:

```text
Type: CNAME
Host: portfolio
Value: cname.vercel-dns.com
TTL: Automatic
```

Then add `portfolio.ducanh.space` in the Vercel project settings.

## Contact Form Behavior

The contact form is static and does not require a backend.

When a visitor submits the form, JavaScript redirects the current tab to Gmail compose with a prepared email addressed to:

```text
ducanh.nguyenkl@gmail.com
```

Visitors need to be signed in to Gmail to send the prepared message. For a production form that submits directly on the website, connect a service such as Formspree, Netlify Forms, Resend or a custom Spring Boot contact API.

## Links

- Portfolio live demo for AI project: <https://www.ducanh.space/>
- GitHub: <https://github.com/AnhND81225>
- LinkedIn: <https://www.linkedin.com/in/anhnd8125>
