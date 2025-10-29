# Deployment Checklist

## ✅ Pre-Deployment (Completed)

- [x] Dependencies installed (`npm install --legacy-peer-deps`)
- [x] Build successful (`npm run build`)
- [x] Supabase database table created
- [x] `.env.local` configured with Supabase credentials
- [x] API routes implemented (waitlist, transactions, compliance)
- [x] Submission documents created (TEAM.md, TRAVEL_PLAN.md)

## 📝 Before You Commit

### 1. Update Personal Information
- [ ] Edit `TEAM.md` with your actual founder information
- [ ] Edit `TRAVEL_PLAN.md` with your travel details
- [ ] Update `README.md` contact section (lines 75-78)

### 2. Optional Customizations
- [ ] Update author names in code files (search for `[Your Team Name]`)
- [ ] Customize pitch deck content in `PITCH_DECK_CONTENT.md`
- [ ] Review and adjust business model in `BUSINESS_MODEL.md`

## 🚀 Deployment Steps

### Step 1: Commit to Git
```bash
git add .
git commit -m "Initial RampKit submission for Road to Buenos Aires 2025"
git push origin main
```

### Step 2: Deploy to Vercel

**Option A: Via Vercel Dashboard**
1. Go to https://vercel.com/new
2. Import your GitHub repository
3. Configure project:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: (leave default)

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel
```

### Step 3: Add Environment Variables in Vercel
1. Go to your project settings in Vercel
2. Navigate to "Environment Variables"
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = `https://oldkmzrmcoonsnnpggmf.supabase.co`
   - `SUPABASE_SERVICE_ROLE_KEY` = `[your service role key]`
4. Apply to: Production, Preview, and Development
5. Redeploy if necessary

### Step 4: Test Production Deployment
- [ ] Visit your Vercel URL (e.g., `rampkit.vercel.app`)
- [ ] Test landing page loads correctly
- [ ] Navigate to `/rampkit/docs` - verify API docs page works
- [ ] Test waitlist form:
  - Enter an email
  - Submit form
  - Verify success message appears
  - Check Supabase dashboard to confirm email was saved

### Step 5: Final Submission Checklist
- [ ] GitHub repository is public (or accessible to judges)
- [ ] Live demo URL is working
- [ ] Waitlist form is functional
- [ ] API documentation is accessible
- [ ] All submission documents are complete
- [ ] Pitch deck is ready (PDF or link)

## 🔗 Important URLs

- **GitHub Repo:** [Add your repo URL]
- **Live Demo:** [Add your Vercel URL]
- **Supabase Dashboard:** https://app.supabase.com/project/oldkmzrmcoonsnnpggmf
- **Vercel Dashboard:** https://vercel.com/dashboard

## 📧 Submission Package

Include these in your submission:
1. GitHub repository link
2. Live demo URL (Vercel)
3. Pitch deck (PDF or link)
4. Team information (from TEAM.md)
5. Travel plan (from TRAVEL_PLAN.md)

## ⚠️ Common Issues

**Build fails on Vercel?**
- Ensure environment variables are set correctly
- Check build logs for specific errors
- Verify Node.js version compatibility

**Waitlist form not working?**
- Check environment variables in Vercel
- Verify Supabase table exists
- Check Vercel function logs for errors

**404 errors?**
- Ensure you're visiting `/rampkit` not just `/`
- Check that all routes are deployed

## 🎉 You're Ready!

Once all checkboxes are complete, you're ready to submit to Road to Buenos Aires 2025!
