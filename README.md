# RampKit

Compliant stablecoin on/off-ramp infrastructure for fintech developers. RampKit provides a developer-first API with built‑in KYC/AML to help companies move between fiat and stablecoins at a fraction of traditional remittance costs.

## Overview

- **Problem**: Cross‑border payments remain slow and expensive (average global remittance fees ≈ 6.5%). Compliance (KYC/AML) adds complexity and delays for fintech builders.
- **Solution**: A compliance‑first API and reference implementation enabling fiat ↔ stablecoin flows with automated KYC/AML checks, webhooks, and sandbox testing.
- **Who it’s for**: B2B fintech developers, wallets, neo‑banks, and payment companies in LATAM and beyond.

## Live Resources

- **Live Demo**: [`rampkit.vercel.app`](https://rampkit.vercel.app)
- **API Docs**: [`rampkit.vercel.app/rampkit/docs`](https://rampkit.vercel.app/rampkit/docs)
- **Business Model**: see `BUSINESS_MODEL.md`
- **Discovery Plan**: see `DISCOVERY_PLAN.md`
- **Pitch Deck Content**: see `PITCH_DECK_CONTENT.md`

## Repository Structure

```
rampkit/
├── app/
│   ├── page.tsx                   # Redirects to /rampkit
│   ├── layout.tsx                 # App shell, analytics, fonts
│   ├── globals.css                # Tailwind v4 + theme tokens
│   ├── api/
│   │   ├── waitlist/route.ts      # Waitlist signup (Supabase insert)
│   │   ├── transactions/route.ts  # Transaction stub (demo)
│   │   └── compliance/route.ts    # KYC/AML stub (demo)
│   └── rampkit/
│       ├── page.tsx               # Marketing/landing page with waitlist
│       └── docs/page.tsx          # Interactive API documentation
├── components/                    # UI primitives (shadcn/Radix)
├── hooks/                         # `use-toast`, `use-mobile`
├── lib/                           # Utilities (e.g., `cn`)
├── scripts/
│   └── create-waitlist-table.sql  # Supabase schema for waitlist
├── styles/                        # Global styles (if applicable)
├── SETUP.md                       # Local + prod setup
├── QUICK_START.md                 # Short guide
├── SUBMISSION_CHECKLIST.md        # Competition checklist
├── BUSINESS_MODEL.md              # Revenue & GTM
├── DISCOVERY_PLAN.md              # 90‑day validation plan
├── TEAM.md                        # Founder bios
└── TRAVEL_PLAN.md                 # Event attendance
```

## Architecture

- **Frontend**: Next.js App Router, React 19, Tailwind CSS 4, shadcn/Radix UI.
- **APIs**: Next.js Route Handlers under `app/api/*`.
- **Data**: Supabase (PostgreSQL) for waitlist capture.
- **Analytics**: Vercel Analytics.
- **Hosting**: Vercel.

### API Overview (current demo)

- `POST /api/waitlist`
  - Body: `{ email }`
  - Behavior: Validates and inserts into `waitlist`. Duplicate emails return a friendly success message.

- `POST /api/transactions` (stub)
  - Body: `{ amount, currency, stablecoin, wallet_address }`
  - Returns: Mock transaction object with a 0.5% fee and pending status.

- `GET /api/transactions?id=...` (stub)
  - Returns: Mock completed transaction data.

- `POST /api/compliance` (stub)
  - Body: `{ user_id, document_type, document_image? }`
  - Returns: Mock approved KYC verification.

- `GET /api/compliance?user_id=...` (stub)
  - Returns: Mock verified KYC status.

## Getting Started

See `SETUP.md` or the condensed `QUICK_START.md`. Summary:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create `.env.local` with Supabase credentials:
   ```bash
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```
3. Create the database table (in Supabase SQL editor):
   - Open `scripts/create-waitlist-table.sql` and run it.
4. Start the dev server and open `http://localhost:3000`:
   ```bash
   npm run dev
   ```
5. Test the waitlist form at `/rampkit` and confirm inserts in Supabase.

### Environment Variables

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL.
- `SUPABASE_SERVICE_ROLE_KEY`: Service role key (server‑side only).

### Deployment (Vercel)

1. Push the repository to GitHub.
2. Import into Vercel and deploy.
3. Add the environment variables in Vercel Project Settings.
4. Redeploy to apply env vars.

## Security Notes

- The service role key is used only in server‑side Route Handlers. Never expose it on the client.
- Enable RLS on `waitlist` (policy included in SQL script). Review and harden for production environments.

## Roadmap (abridged)

- Replace demo stubs with production integrations for deposits/withdrawals.
- Add webhook delivery and signing.
- Provide official SDKs (TypeScript/Python) and Postman collection.
- Expand compliance checks and reporting.
- Add operator network routing and best‑rate quoting.

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4, Radix UI, shadcn/ui
- Supabase (PostgreSQL)
- Vercel (hosting & analytics)

## Contributing

Contributions are welcome. Please open an issue to discuss proposed changes before submitting a PR.

## License

This project is licensed under the MIT License. See `LICENSE` for details.

## Contact

- Founder: [Your Name]
- Email: [your@email]
- LinkedIn: [your‑linkedin]
