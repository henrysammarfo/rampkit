# RampKit - Quick Start Guide

## ✅ Completed Setup Steps

### 1. Environment Configuration
- ✅ Created `.env.local` with your Supabase credentials
- ✅ Created `.env.example` template for version control
- ✅ Supabase project configured: `oldkmzrmcoonsnnpggmf`

### 2. API Routes
- ✅ `/api/waitlist` - Handles email signups with duplicate detection
- ✅ `/api/transactions` - Stub for transaction processing (demo mode)
- ✅ `/api/compliance` - Stub for KYC/AML verification (demo mode)

### 3. Submission Documents
- ✅ `TEAM.md` - Template for founder bios
- ✅ `TRAVEL_PLAN.md` - Template for event attendance
- ✅ All business documents already present

---

## 🚀 Next Steps

### Step 1: Install Dependencies (In Progress)
```bash
npm install
```

### Step 2: Create Database Table
1. Go to your Supabase dashboard: https://app.supabase.com/project/oldkmzrmcoonsnnpggmf
2. Navigate to SQL Editor
3. Run the SQL from `scripts/create-waitlist-table.sql`

### Step 3: Test Locally
```bash
npm run dev
```
Then visit: http://localhost:3000

### Step 4: Test Waitlist Form
1. Navigate to the RampKit landing page
2. Scroll to the waitlist section
3. Enter an email and submit
4. Verify in Supabase dashboard that the email was saved

### Step 5: Complete Submission Documents
1. Edit `TEAM.md` with your actual information
2. Edit `TRAVEL_PLAN.md` with your travel details
3. Review and customize `PITCH_DECK_CONTENT.md`

### Step 6: Deploy to Vercel
Follow instructions in `GITHUB_SETUP.md` to:
1. Push code to GitHub
2. Connect to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

---

## 📋 Pre-Deployment Checklist

- [ ] Dependencies installed (`node_modules` exists)
- [ ] Database table created in Supabase
- [ ] Local testing successful (waitlist form works)
- [ ] `TEAM.md` completed with real information
- [ ] `TRAVEL_PLAN.md` completed with real information
- [ ] Environment variables added to Vercel
- [ ] Site deployed and accessible
- [ ] All submission documents reviewed

---

## 🔧 Troubleshooting

### Waitlist form not working?
1. Check `.env.local` has correct Supabase credentials
2. Verify database table exists in Supabase
3. Check browser console for errors
4. Verify Supabase RLS policies allow inserts

### TypeScript errors?
- These are expected before `npm install` completes
- Run `npm install` to resolve

### Deployment issues?
- Ensure environment variables are set in Vercel
- Check Vercel deployment logs for errors
- Verify Supabase URL is accessible from Vercel

---

## 📞 Support

If you encounter issues:
1. Check `SETUP.md` for detailed instructions
2. Review `SUBMISSION_CHECKLIST.md` for requirements
3. Consult `TROUBLESHOOTING` section in `SETUP.md`
