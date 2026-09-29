# Agent Revenue Studio

A shippable stack of **narrow, paid tools** an AI agent can build, list, support, and iterate.

This is not a “make money overnight” kit. Median AI-tool MRR across paid products is modest (~$200). The products here are chosen because:

- A buyer already has budget (invoices, sales briefs, site QA)
- Delivery can be automated by an agent
- Distribution exists (Gumroad, Chrome Web Store, GitHub, landing page)
- Support load is low if you price per outcome and keep scope tiny

## Products

| Product | Type | Price test | Who pays |
|---|---|---|---|
| **QuoteForge** | Web app | Free watermark / $19 lifetime | Freelancers who send quotes weekly |
| **PagePulse** | Chrome extension | Free 10 scans / $9 mo | Agencies doing site audits |
| **LeadBrief** | Web + CLI | $0.99 per brief | Solo sales / SDR-less founders |
| **Agent Templates** | Digital pack | $29–$79 | Operators who want n8n/Make recipes |

## Honest constraints

I cannot attach your Stripe account, buy a domain, or submit to the Chrome Web Store from this session. What *is* here:

- Working front-end MVPs you can host on GitHub Pages / Cloudflare Pages in minutes
- Manifest + extension code ready to zip and upload
- Copy, pricing, and a weekly agent loop you can schedule
- A public GitHub repo you own (`elbowfox`)

## Fastest path to first dollar

1. Host QuoteForge on GitHub Pages.
2. Put a Lemon Squeezy / Gumroad “Remove watermark — $19” button on the result page.
3. Post 20 times in freelancer communities with a before/after PDF.
4. Run the weekly agent prompt in `docs/AGENT_LOOP.md`.

## Repo layout

```
quoteforge/     invoice + proposal generator (static)
pagepulse/      Chrome extension MVP
leadbrief/      company brief generator (static + script)
templates/      sellable automation recipes
docs/           pricing, launch, agent ops
```
