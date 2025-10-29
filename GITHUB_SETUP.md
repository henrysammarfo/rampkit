# GitHub Repository Setup - Step by Step

## Step 1: Create GitHub Repository

### 1.1 Go to GitHub
1. Open [github.com](https://github.com)
2. Sign in to your account (create one if needed)
3. Click the **+** icon in top right → **New repository**

### 1.2 Configure Repository
Fill in these fields:

| Field | Value |
|-------|-------|
| Repository name | `rampkit` |
| Description | `Compliant stablecoin on/off-ramp infrastructure for Latin American fintech` |
| Visibility | **PUBLIC** (important for judges to see) |
| Initialize with README | ✓ Check this |
| Add .gitignore | Select "Node" |
| Add license | Select "MIT" |

### 1.3 Create Repository
Click **Create repository**

---

## Step 2: Clone Repository to Your Computer

### 2.1 Copy Repository URL
1. On your new repo page, click **Code** (green button)
2. Copy the HTTPS URL (should look like: `https://github.com/YOUR_USERNAME/rampkit.git`)

### 2.2 Clone to Your Machine
Open terminal/command prompt and run:

\`\`\`bash
# Navigate to where you want the project
cd ~/Documents

# Clone the repository
git clone https://github.com/YOUR_USERNAME/rampkit.git

# Enter the project folder
cd rampkit
\`\`\`

---

## Step 3: Add Files from v0 Download

### 3.1 Download ZIP from v0
1. In v0, click the **three dots** (⋯) in top right
2. Select **Download ZIP**
3. Extract the ZIP file

### 3.2 Copy Files to GitHub Folder
\`\`\`bash
# Copy all files from v0 ZIP to your rampkit folder
# (Use your file explorer or terminal)

# If using terminal (Mac/Linux):
cp -r ~/Downloads/v0-project/* ~/Documents/rampkit/

# If using terminal (Windows):
xcopy C:\Users\YourName\Downloads\v0-project\* C:\Users\YourName\Documents\rampkit\ /E
\`\`\`

### 3.3 Verify Files
\`\`\`bash
# List all files in the folder
ls -la

# You should see:
# - app/
# - lib/
# - scripts/
# - public/
# - .gitignore
# - package.json
# - tsconfig.json
# - README.md (we'll replace this)
# - All the MD files (SETUP.md, BUSINESS_MODEL.md, etc.)
\`\`\`

---

## Step 4: Update README

### 4.1 Replace README.md
\`\`\`bash
# The README.md from v0 is already good
# But verify it has:
# - Project name: RampKit
# - Description of the problem
# - Links to live demo and API docs
# - Project structure
# - Submission requirements checklist
\`\`\`

### 4.2 Verify README Content
Open `README.md` and check it includes:
- [ ] Project title and description
- [ ] Quick links (demo, API docs, pitch deck)
- [ ] Project structure diagram
- [ ] Submission requirements checklist
- [ ] Getting started instructions
- [ ] Key metrics

---

## Step 5: Create .env.local (DO NOT COMMIT)

### 5.1 Create Environment File
\`\`\`bash
# Create .env.local file in project root
touch .env.local
\`\`\`

### 5.2 Add Supabase Keys
Open `.env.local` and add:
\`\`\`
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here
\`\`\`

### 5.3 Verify .gitignore
Check that `.gitignore` includes:
\`\`\`
.env.local
.env
.env.*.local
node_modules/
.next/
\`\`\`

---

## Step 6: Commit and Push to GitHub

### 6.1 Stage All Files
\`\`\`bash
# Add all files to staging
git add .

# Verify what will be committed
git status
\`\`\`

### 6.2 Create First Commit
\`\`\`bash
# Commit with descriptive message
git commit -m "Initial RampKit submission for Road to Buenos Aires 2025

- Landing page with problem/solution framing
- API documentation
- Waitlist system with Supabase integration
- Business model and GTM strategy
- Discovery plan and validation roadmap
- Complete submission package"
\`\`\`

### 6.3 Push to GitHub
\`\`\`bash
# Push to main branch
git push origin main

# Verify on GitHub - refresh the page
# You should see all your files
\`\`\`

---

## Step 7: Verify Repository Structure

### 7.1 Check GitHub Repository
Go to your GitHub repo and verify:

\`\`\`
rampkit/
├── app/
│   ├── rampkit/
│   │   ├── page.tsx
│   │   └── docs/
│   │       └── page.tsx
│   ├── api/
│   │   ├── waitlist/
│   │   │   └── route.ts
│   │   ├── transactions/
│   │   │   └── route.ts
│   │   └── compliance/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   ├── supabase.ts
│   └── compliance.ts
├── scripts/
│   ├── create-waitlist-table.sql
│   └── seed-data.sql
├── public/
├── .gitignore
├── package.json
├── tsconfig.json
├── README.md
├── SETUP.md
├── SUBMISSION_CHECKLIST.md
├── PITCH_DECK_CONTENT.md
├── BUSINESS_MODEL.md
├── DISCOVERY_PLAN.md
├── FOUNDER_BIO_TEMPLATE.md
└── CLAUDE_AI_PROMPTS.md
\`\`\`

### 7.2 Verify Key Files
- [ ] README.md is complete
- [ ] All MD files are present
- [ ] app/ folder has landing page
- [ ] app/api/ folder has backend routes
- [ ] scripts/ folder has SQL files
- [ ] .gitignore is configured
- [ ] No .env files visible
- [ ] No node_modules folder

---

## Step 8: Get Repository Link for Submission

### 8.1 Copy Repository URL
1. Go to your GitHub repo
2. Click **Code** (green button)
3. Copy the HTTPS URL
4. Save this for submission: `https://github.com/YOUR_USERNAME/rampkit`

### 8.2 Make Repository Public
1. Go to repo **Settings**
2. Scroll to "Danger Zone"
3. Verify repository is **Public** (not Private)
4. If Private, click "Change visibility" → "Public"

---

## Step 9: Add Collaborators (Optional)

If you have a co-founder:

1. Go to repo **Settings** → **Collaborators**
2. Click **Add people**
3. Enter their GitHub username
4. They'll receive an invite

---

## Step 10: Create GitHub Pages (Optional)

If you want GitHub to host documentation:

1. Go to repo **Settings** → **Pages**
2. Select "Deploy from a branch"
3. Select "main" branch
4. Select "/root" folder
5. Click **Save**

Your docs will be available at: `https://YOUR_USERNAME.github.io/rampkit/`

---

## Troubleshooting

**"Permission denied" when pushing?**
\`\`\`bash
# Generate SSH key (alternative to HTTPS)
ssh-keygen -t ed25519 -C "your_email@example.com"
# Add to GitHub Settings → SSH Keys
\`\`\`

**"fatal: not a git repository"?**
\`\`\`bash
# Make sure you're in the rampkit folder
cd ~/Documents/rampkit
git status
\`\`\`

**Files not showing up?**
\`\`\`bash
# Force add all files
git add -A
git commit -m "Add all files"
git push origin main
\`\`\`

**Want to undo last commit?**
\`\`\`bash
# Undo last commit (keep files)
git reset --soft HEAD~1

# Or undo and delete files
git reset --hard HEAD~1
\`\`\`

---

## Next Steps

1. ✅ Repository created and pushed
2. → Deploy to Vercel (see SUBMISSION_CHECKLIST.md)
3. → Set up Supabase (see SETUP.md)
4. → Create pitch deck (see PITCH_DECK_CONTENT.md)
5. → Submit (see SUBMISSION_CHECKLIST.md)

**Your GitHub repo is now ready for judges to review! 🚀**
