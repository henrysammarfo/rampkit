# RampKit Setup Instructions

**Authors:** [Your Team Name]  
**Competition:** Road to Buenos Aires 2025

---

## Prerequisites

- Node.js 18+ installed
- Supabase account (your other account that hasn't reached limit)
- Git installed

---

## Step 1: Supabase Setup

### 1.1 Create Supabase Project

1. Go to https://supabase.com
2. Sign in with your other account
3. Click "New Project"
4. Name it: `rampkit-waitlist`
5. Set a strong database password (save it!)
6. Choose region closest to Buenos Aires (South America)
7. Wait for project to finish setting up (~2 minutes)

### 1.2 Create Waitlist Table

1. In your Supabase project, click "SQL Editor" in left sidebar
2. Click "New Query"
3. Copy the contents of `scripts/create-waitlist-table.sql`
4. Paste into the SQL editor
5. Click "Run" button
6. You should see "Success. No rows returned"

### 1.3 Get API Keys

1. Click "Settings" (gear icon) in left sidebar
2. Click "API" under Project Settings
3. Copy these values (you'll need them next):
   - **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - **anon public** key (starts with `eyJ...`)
   - **service_role** key (starts with `eyJ...`) - Keep this SECRET!

---

## Step 2: Local Development Setup

### 2.1 Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 2.2 Create Environment Variables

Create a file called `.env.local` in the root directory:

\`\`\`bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
\`\`\`

Replace the values with your actual Supabase credentials from Step 1.3.

### 2.3 Test Locally

\`\`\`bash
npm run dev
\`\`\`

Open http://localhost:3000 in your browser. You should see the RampKit landing page.

Test the waitlist:
1. Scroll to the bottom
2. Enter your email
3. Click "Join Waitlist"
4. You should see "You're on the list!"

Verify in Supabase:
1. Go to your Supabase project
2. Click "Table Editor" in left sidebar
3. Click "waitlist" table
4. You should see your email!

---

## Step 3: Deploy to Vercel

### 3.1 Push to GitHub

\`\`\`bash
git init
git add .
git commit -m "Initial commit - RampKit for Road to Buenos Aires 2025"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/rampkit.git
git push -u origin main
\`\`\`

### 3.2 Deploy on Vercel

1. Go to https://vercel.com
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Click "Deploy"
5. Wait for deployment to complete

### 3.3 Add Environment Variables to Vercel

1. In your Vercel project, click "Settings"
2. Click "Environment Variables"
3. Add these variables:
   - `NEXT_PUBLIC_SUPABASE_URL` = your Supabase URL
   - `SUPABASE_SERVICE_ROLE_KEY` = your service role key
4. Click "Save"
5. Go to "Deployments" tab
6. Click "..." on latest deployment → "Redeploy"

---

## Step 4: Test Production

1. Visit your Vercel URL (e.g., `rampkit.vercel.app`)
2. Test the waitlist form
3. Verify emails are being saved in Supabase

---

## Step 5: Submission Checklist

- [ ] Landing page loads correctly
- [ ] API Docs page works (`/rampkit/docs`)
- [ ] Waitlist form submits successfully
- [ ] Emails are saved in Supabase
- [ ] All "IDEA STAGE" badges removed
- [ ] Site is live on Vercel
- [ ] GitHub repo is public (or accessible to judges)

---

## Troubleshooting

### Waitlist form not working?

1. Check browser console for errors (F12 → Console tab)
2. Verify environment variables are set in Vercel
3. Check Supabase table was created correctly
4. Make sure you redeployed after adding env vars

### Can't connect to Supabase?

1. Verify your API keys are correct
2. Check if your Supabase project is active
3. Make sure you're using the service_role key (not anon key) in the API route

### Need help?

Check the console logs:
- Browser console (F12)
- Vercel deployment logs (Vercel dashboard → Deployments → View Function Logs)

---

## What to Submit

1. **Live URL:** Your Vercel deployment URL
2. **GitHub Repo:** Link to your public repository
3. **Demo Video:** (Optional) Screen recording showing the site working
4. **Pitch Deck:** Highlight the validation plan and market opportunity

---

## Good Luck! 🚀

You've built a professional landing page with working waitlist functionality. The focus on validation plan and market opportunity shows you understand what it takes to build a sustainable startup.

Remember: The judges want to see clear thinking, realistic execution plans, and evidence you can validate demand. You've got this!
