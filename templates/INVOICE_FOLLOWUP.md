# Productized template: Invoice follow-up agent

**Sell on Gumroad as:** "Invoice chase in 15 minutes — n8n + Gmail"

**Price test:** $29

## What the buyer gets

An agent recipe that:

1. Reads unpaid invoices from a spreadsheet
2. Drafts a polite chase email in the sender's voice
3. Waits 7 days, then sends a firmer second note
4. Stops when status = paid

## Human rules (do not skip)

- Never threaten illegal collections
- Never invent late fees the contract does not include
- Always include a one-click pay link the seller provides

## Prompt the agent runs

You are collecting an overdue invoice for {{company}}.
Amount: {{amount}}. Due: {{due_date}}. Days late: {{days_late}}.
Tone: firm, short, no guilt.
Include pay link: {{pay_url}}.
Do not claim legal action.
Output only the email body.

## Why this sells

Freelancers already lose money to unpaid invoices. The outcome is cash, not "productivity."
