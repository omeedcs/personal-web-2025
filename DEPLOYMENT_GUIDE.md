# Deployment Guide: omeedtehrani.com

## Why Vercel?
- Built by the Next.js team
- Zero configuration needed
- Free tier (perfect for personal sites)
- Automatic deployments from GitHub
- SSL certificates automatically handled
- Perfect for Next.js SSR and API routes

## Step-by-Step Deployment

### 1. Push Your Code to GitHub

```bash
cd /Users/omeedtehrani/personal-web

# Initialize git if not already done
git init
git add .
git commit -m "Initial commit - personal website"

# Create a new repo on GitHub called "personal-web"
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/personal-web.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use your GitHub account
3. Click "Add New Project"
4. Import your `personal-web` repository
5. Vercel will auto-detect Next.js - just click "Deploy"
6. Wait 2-3 minutes for deployment ✅

You'll get a URL like: `personal-web.vercel.app`

### 3. Add Your Custom Domain in Vercel

1. In your Vercel project dashboard, click "Settings"
2. Click "Domains" in the left sidebar
3. Add your domain: `omeedtehrani.com`
4. Also add: `www.omeedtehrani.com`
5. Vercel will show you DNS records to add

### 4. Update DNS in Squarespace

Go to your Squarespace DNS Settings and **replace** the current records:

#### Remove These:
- Delete the `@` A record pointing to `198.49.23.145`
- Delete the `www` CNAME pointing to `ghs.googlehosted.com`
- Delete the `blog` A record

#### Add These (Vercel will provide exact values):

**For apex domain (omeedtehrani.com):**
```
Type: A
Host: @
Value: 76.76.21.21
TTL: 1 hour
```

**For www subdomain:**
```
Type: CNAME
Host: www
Value: cname.vercel-dns.com
TTL: 1 hour
```

**Keep these existing records:**
- `_domainconnect` CNAME (Squarespace needs this)
- `xjzdazc6ziwa` CNAME (Google verification)

### 5. Wait for DNS Propagation

- DNS changes can take 5 minutes to 48 hours
- Usually happens within 10-30 minutes
- Check status at: https://www.whatsmydns.net

### 6. Verify SSL Certificate

- Vercel automatically provisions SSL certificates
- Your site will be available at:
  - https://omeedtehrani.com ✅
  - https://www.omeedtehrani.com ✅

## Alternative: GitHub Pages (Not Recommended)

GitHub Pages doesn't support Next.js SSR well. You'd need to:
1. Export as static site (`next export`)
2. Lose server-side features
3. More complex setup

**Verdict:** Stick with Vercel!

## Continuous Deployment

Once set up:
1. Push changes to GitHub
2. Vercel automatically deploys
3. Live in ~2 minutes ⚡

```bash
git add .
git commit -m "Update content"
git push
```

That's it! Your site auto-updates.

## Costs

- **Vercel Free Tier:** Perfect for personal sites
  - Unlimited deployments
  - 100GB bandwidth/month
  - Automatic SSL
  - Custom domains
  
- **Your Domain:** Already paid via Squarespace

## Troubleshooting

### Site not loading?
- Check DNS propagation: https://www.whatsmydns.net
- Verify DNS records in Squarespace match Vercel's requirements
- Clear browser cache

### Build failing?
- Check Vercel deployment logs
- Ensure all dependencies in `package.json`
- Verify Node.js version compatibility

### Need to add podcast logo?
Save your podcast logo image as: `/public/podcast-logo.png`

## Environment Variables (if needed in future)

If you add API keys or secrets:
1. In Vercel dashboard → Settings → Environment Variables
2. Add key-value pairs
3. Redeploy

---

**Ready to deploy? Follow steps 1-4 above!**
