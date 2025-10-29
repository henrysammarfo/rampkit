# RampKit - Compliant Stablecoin On/Off-Ramp Infrastructure

**Road to Buenos Aires 2025 Submission**

RampKit is a developer-first API infrastructure for compliant stablecoin on/off-ramps targeting Latin American fintech companies. We're solving the 6.5% remittance fee problem with built-in KYC/AML compliance.

## Quick Links
- **Live Demo**: [rampkit.vercel.app](https://rampkit.vercel.app)
- **API Docs**: [rampkit.vercel.app/rampkit/docs](https://rampkit.vercel.app/rampkit/docs)
- **Pitch Deck**: See `PITCH_DECK_CONTENT.md`
- **Business Model**: See `BUSINESS_MODEL.md`
- **Discovery Plan**: See `DISCOVERY_PLAN.md`

## Project Structure

\`\`\`
rampkit/
├── app/
│   ├── rampkit/
│   │   ├── page.tsx              # Landing page
│   │   └── docs/
│   │       └── page.tsx          # API documentation
│   ├── api/
│   │   ├── waitlist/
│   │   │   └── route.ts          # Waitlist signup endpoint
│   │   ├── transactions/
│   │   │   └── route.ts          # Transaction processing
│   │   └── compliance/
│   │       └── route.ts          # KYC/AML verification
│   ├── layout.tsx
│   ├── page.tsx                  # Redirects to /rampkit
│   └── globals.css
├── lib/
│   ├── supabase.ts               # Supabase client setup
│   └── compliance.ts             # Compliance logic
├── scripts/
│   ├── create-waitlist-table.sql # Database schema
│   └── seed-data.sql             # Sample data
├── SETUP.md                      # Supabase setup guide
├── SUBMISSION_CHECKLIST.md       # Complete submission guide
├── PITCH_DECK_CONTENT.md         # Slide-by-slide content
├── GITHUB_SETUP.md               # GitHub repo creation
├── BUSINESS_MODEL.md             # Revenue & GTM
├── DISCOVERY_PLAN.md             # 90-day validation
├── FOUNDER_BIO_TEMPLATE.md       # Team information
└── CLAUDE_AI_PROMPTS.md          # AI helper prompts
\`\`\`

## Submission Requirements Met

✅ **Clear Problem Framing** - 6.5% remittance fees, compliance barriers, developer friction  
✅ **Credible Market Timing** - $300B stablecoin market, 75% YoY growth, major companies integrating  
✅ **Defensible Approach** - Compliance-first architecture, multi-currency support, developer SDK  
✅ **Early Signals of Demand** - Waitlist system, discovery plan, market research  
✅ **Realistic GTM** - Phased rollout: pilots → paid customers → scale  

## Getting Started

**Quick Start:** See `QUICK_START.md` for step-by-step setup instructions.

1. **Setup Environment** - `.env.local` configured with Supabase credentials
2. **Install Dependencies** - `npm install --legacy-peer-deps`
3. **Create Database** - Run SQL from `scripts/create-waitlist-table.sql` in Supabase
4. **Test Locally** - `npm run dev` and test at http://localhost:3000
5. **Complete Docs** - Fill in `TEAM.md` and `TRAVEL_PLAN.md`
6. **Deploy** - Follow `GITHUB_SETUP.md` to deploy to Vercel
7. **Submit** - Use `SUBMISSION_CHECKLIST.md` as final guide

## Key Metrics

- **Market Size**: $300B stablecoin market (2025)
- **TAM**: $46T annual stablecoin transactions
- **Problem**: 6.5% average remittance fees globally
- **Solution**: 0.5% fees + compliance built-in
- **GTM**: B2B fintech developers in LatAm first

## Contact

[Your Name] - Founder  
[Your Email]  
[Your LinkedIn]
