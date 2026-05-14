# Nepal Police Hackathon - Next.js Application

A modern Next.js application with React, TypeScript, and Tailwind CSS for the Lumbini Police Hackathon.

## Table of Contents

- [Local Development](#local-development)
- [Ubuntu Server Hosting](#ubuntu-server-hosting)
  - [Prerequisites](#prerequisites)
  - [Server Setup](#server-setup)
  - [Application Deployment](#application-deployment)
  - [Nginx Configuration](#nginx-configuration)
  - [SSL/HTTPS Setup](#ssltls-setup)
  - [Maintenance & Monitoring](#maintenance--monitoring)
- [Troubleshooting](#troubleshooting)

---

## Local Development

### Prerequisites

- Node.js 18+ and npm/yarn installed
- Git installed

### Getting Started

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd Nepal-Police-Hackathon
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm start       # Start production server
npm run lint    # Run ESLint
```

---

## Next.js Hosting Methodology

Specific deployment guide for Next.js applications on production servers.

### Prerequisites

- Node.js 18+ installed on server
- npm installed
- Nginx web server running
- PM2 process manager available
- Git installed
- Application directory: `/var/www/np-police-hackathon`

---

### Step 1: Clone & Setup Application

```bash
cd /var/www/np-police-hackathon
git clone <repository-url> .
npm install
```

---

### Step 2: Create Production Build

Next.js build process creates optimized production bundle:

```bash
npm run build
```

This generates:
- `.next/` - Compiled & optimized Next.js application
- `public/` - Static assets
- Server code ready for execution

---

### Step 3: Configure Environment Variables

Create `.env.production` file in application root:

```bash
# .env.production
NODE_ENV=production
PORT=3000

# NEXT_PUBLIC_ variables are exposed to browser (safe to show)
# NEXT_PUBLIC_API_URL=https://your-api.com
# NEXT_PUBLIC_GA_ID=your-ga-id

# Private variables (NOT exposed to browser)
# DATABASE_URL=your-database-url
# API_SECRET=your-secret-key
```

**Important:** Only prefix with `NEXT_PUBLIC_` if the variable needs to be accessible in the browser.

---

### Step 4: Start Application with PM2

**Option A: Using npm script (Recommended)**

```bash
pm2 start npm --name "np-police" -- start
pm2 save
pm2 startup
```

**Option B: Using ecosystem.config.js (Advanced)**

Create `ecosystem.config.js` in application root:

```javascript
module.exports = {
  apps: [
    {
      name: "np-police",
      script: "npm",
      args: "start",
      cwd: "/var/www/np-police-hackathon",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
      error_file: "./logs/error.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      ignore_watch: ["node_modules", ".next/cache"],
    },
  ],
};
```

Then start with:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

---

### Step 5: Verify Application is Running

```bash
# Check PM2 status
pm2 status

# Test application
curl http://localhost:3000

# View logs
pm2 logs np-police

# Monitor in real-time
pm2 monit
```

---

### Step 6: Configure Nginx Reverse Proxy

Nginx acts as reverse proxy for Next.js application running on port 3000.

#### Create Nginx Configuration

```bash
sudo nano /etc/nginx/sites-available/np-police-hackathon
```

#### Add Next.js-Optimized Configuration

```nginx
upstream next_app {
    server localhost:3000;
    keepalive 64;
}

server {
    listen 80;
    server_name your_domain.com www.your_domain.com;

    # Redirect HTTP to HTTPS (enable after SSL setup)
    # return 301 https://$server_name$request_uri;

    location / {
        proxy_pass http://next_app;
        proxy_http_version 1.1;
        
        # Next.js specific headers
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        # Timeouts for Next.js
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Cache Next.js static assets
    location /_next/static {
        proxy_pass http://next_app/_next/static;
        proxy_cache_valid 60m;
        proxy_cache_bypass $http_pragma $http_authorization;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    # Cache public assets
    location /public {
        proxy_pass http://next_app/public;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Gzip compression for Next.js
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/typescript;
    gzip_min_length 1000;
}
```

#### Enable Configuration

```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/np-police-hackathon /etc/nginx/sites-enabled/

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

### Step 7: Setup HTTPS with Let's Encrypt

Enable SSL/TLS for your Next.js application.

#### Install Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

#### Obtain SSL Certificate

```bash
sudo certbot certonly --nginx -d your_domain.com -d www.your_domain.com
```

#### Update Nginx for HTTPS

```bash
sudo nano /etc/nginx/sites-available/np-police-hackathon
```

Replace with HTTPS configuration:

```nginx
upstream next_app {
    server localhost:3000;
    keepalive 64;
}

# HTTP to HTTPS redirect
server {
    listen 80;
    server_name your_domain.com www.your_domain.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS server
server {
    listen 443 ssl http2;
    server_name your_domain.com www.your_domain.com;

    # SSL certificates from Let's Encrypt
    ssl_certificate /etc/letsencrypt/live/your_domain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/your_domain.com/privkey.pem;

    # SSL best practices
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    location / {
        proxy_pass http://next_app;
        proxy_http_version 1.1;
        
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://next_app/_next/static;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, max-age=3600, immutable";
    }

    location /public {
        proxy_pass http://next_app/public;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript application/typescript;
    gzip_min_length 1000;
}
```

#### Apply Changes

```bash
# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

#### Enable Auto-Renewal

```bash
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer
```

---

## Maintenance & Monitoring

### PM2 Process Management

```bash
# View application status
pm2 status

# View real-time logs
pm2 logs np-police

# View last 100 lines
pm2 logs np-police --lines 100

# Monitor CPU & memory usage
pm2 monit

# Get detailed process info
pm2 show np-police

# Restart application
pm2 restart np-police

# Stop application
pm2 stop np-police

# Start application
pm2 start np-police
```

### Update Application

Standard deployment for code updates:

```bash
cd /var/www/np-police-hackathon

# Get latest code
git pull origin main

# Install new dependencies (if any)
npm install

# Build Next.js application
npm run build

# Restart PM2 (old PM2 process killed, new one started)
pm2 restart np-police
```

### Zero-Downtime Deployments

For updates without downtime, use PM2 reload:

```bash
cd /var/www/np-police-hackathon
git pull origin main
npm install
npm run build

# Gracefully restart with zero downtime
pm2 reload np-police
```

### Monitor Application Health

```bash
# Check if Next.js responding
curl -I http://localhost:3000

# Check process memory usage
ps aux | grep "node\|npm"

# Check port 3000 is active
lsof -i :3000
```

### Check Logs

```bash
# PM2 application logs
pm2 logs np-police

# Nginx error logs
sudo tail -f /var/log/nginx/error.log

# Nginx access logs
sudo tail -f /var/log/nginx/access.log

# System logs
journalctl -xe
```

### Database/Cache Considerations

If your Next.js app uses databases or external services:

```bash
# Before deployment, verify connections in .env.production
cat /var/www/np-police-hackathon/.env.production

# Test database connectivity
pm2 restart np-police && pm2 logs np-police
```

---

## Troubleshooting

### Application Not Running

```bash
# Check PM2 status
pm2 status

# View error logs
pm2 logs np-police

# Check if port 3000 is listening
sudo lsof -i :3000
netstat -tlnp | grep 3000

# Try restarting
pm2 restart np-police
pm2 logs np-police  # Check logs immediately after restart
```

### Application Crashes on Startup

**Common causes:** Missing `.next` directory, environment variables, dependency issues

```bash
# Verify build was successful
cd /var/www/np-police-hackathon
ls -la .next/

# Rebuild if missing
npm run build

# Check .env.production exists
cat .env.production

# Reinstall dependencies if needed
rm -rf node_modules
npm install

# Start fresh
pm2 restart np-police
```

### Blank Pages / 500 Errors

```bash
# Check application logs for errors
pm2 logs np-police

# Check Nginx logs
sudo tail -f /var/log/nginx/error.log

# Verify Next.js build successful
cd /var/www/np-police-hackathon
npm run build

# Check .next directory exists and has content
ls -la .next/standalone/
```

### High Memory Usage

Next.js in cluster mode can use significant memory. Solutions:

```bash
# Check current memory usage
pm2 show np-police

# Reduce to single instance (lower performance but less memory)
pm2 delete np-police
pm2 start npm --name "np-police" -- start

# Or set memory limit
pm2 delete np-police
pm2 start npm --name "np-police" --max-memory-restart 300M -- start
```

### Nginx Issues

```bash
# Test Nginx configuration
sudo nginx -t

# Check Nginx status
sudo systemctl status nginx

# View error logs
sudo tail -f /var/log/nginx/error.log

# Check if reverse proxy working
curl -v http://localhost:3000
```

### SSL Certificate Issues

```bash
# Check certificate status
sudo certbot certificates

# Check certificate expiration date
sudo openssl x509 -noout -dates -in /etc/letsencrypt/live/your_domain.com/cert.pem

# Test manual renewal
sudo certbot renew --dry-run

# Force renewal if needed
sudo certbot renew --force-renewal
```

### Static Files Not Loading

Next.js serves static files from `public/` directory:

```bash
# Verify public directory exists
ls -la /var/www/np-police-hackathon/public/

# Check Nginx cache configuration for /_next/static
grep -A5 "_next/static" /etc/nginx/sites-enabled/np-police-hackathon

# Restart to clear caches
pm2 restart np-police
sudo systemctl reload nginx
```

### API Routes Not Working

If your Next.js app uses API routes (`pages/api/` or `app/api/`):

```bash
# Test API endpoint directly
curl -X GET http://localhost:3000/api/your-endpoint

# Check logs for errors
pm2 logs np-police

# Verify environment variables for API are set
cat /var/www/np-police-hackathon/.env.production | grep API
```

### "Build Failed" Errors

```bash
# Check build output
cd /var/www/np-police-hackathon
npm run build

# Look for errors in output (TypeScript, missing imports, etc.)

# Fix errors in code, then rebuild
git pull
npm run build

# Verify build succeeded
ls -la .next/
```

---

## Quick Deployment Checklist (Next.js Specific)

### Initial Setup (One-time)
- [ ] Infrastructure ready: Node.js, Nginx, PM2, Git installed
- [ ] Application directory: `/var/www/np-police-hackathon`
- [ ] Clone repository: `git clone <url> .`

### First Deployment
- [ ] Install dependencies: `npm install`
- [ ] Create `.env.production` with required variables
- [ ] Build application: `npm run build`
- [ ] Start with PM2: `pm2 start npm --name "np-police" -- start`
- [ ] Verify running: `curl http://localhost:3000`
- [ ] Configure Nginx reverse proxy
- [ ] Enable PM2 startup: `pm2 startup && pm2 save`
- [ ] Setup HTTPS: `sudo certbot certonly --nginx -d your_domain.com`
- [ ] Update Nginx with SSL config and reload
- [ ] Test in browser

### Ongoing Maintenance
- [ ] Monitor PM2: `pm2 monit`
- [ ] Check logs regularly: `pm2 logs np-police`
- [ ] Update code: `git pull && npm install && npm run build && pm2 restart np-police`
- [ ] Monitor storage: `df -h`
- [ ] Watch SSL expiration: `sudo certbot certificates`

---

## Next.js Production Best Practices

### Build Optimization

```bash
# Analyze bundle size
npm run build

# Check build output (examine .next/static/chunks for large files)
du -sh .next/
```

For large bundle sizes:
- Check for unused dependencies: `npm audit`
- Enable `swcMinify` in `next.config.js` (enabled by default in Next.js 13+)
- Split large components with dynamic imports

### Environment Variable Management

**Development:**
```bash
# .env.local (never commit to git)
DATABASE_URL=local_dev_url
```

**Production:**
```bash
# .env.production (contains only non-sensitive config)
NODE_ENV=production
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

# Sensitive variables set directly on server
export DATABASE_PASSWORD=xxx
pm2 restart np-police
```

### Image Optimization

Next.js `<Image>` component automatically optimizes images:

```bash
# Ensure images are in public/ directory
ls -la /var/www/np-police-hackathon/public/

# Images are cached in .next/cache/images/
du -sh .next/cache/images/
```

If cache grows too large:
```bash
# Clear Next.js cache
rm -rf .next/cache/
npm run build
pm2 restart np-police
```

### API Routes & Server-Side Rendering

**API Routes (Next.js 13+: `/app/api/route.ts`)**
- Located at app-relative `/api/*` routes
- Handle directly in Nginx with proxy_pass
- No special configuration needed

**Server-Side Rendering (SSR)**
- Pages using `getServerSideProps` generate on request
- May increase response time - monitor with `pm2 monit`
- CPU usage higher than static generation

**Static Generation**
- Preferred for performance: `getStaticProps` + `getStaticPaths` (Pages Router)
- Or use `revalidate` for ISR (Incremental Static Regeneration)
- Generated files cached at request time

### Performance Monitoring

```bash
# Monitor Next.js process resources
pm2 show np-police

# Check for memory leaks (should be stable)
pm2 logs np-police | grep "heap"

# Monitor Nginx reverse proxy
tail -f /var/log/nginx/access.log

# Check response times in Nginx logs
tail -f /var/log/nginx/access.log | grep "\[" | tail -5
```

### Caching Strategy

**Browser Cache (public/)**
```nginx
location /public {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

**Next.js Static Assets (/_next/static/)**
```nginx
location /_next/static {
    add_header Cache-Control "public, max-age=31536000, immutable";
}
```

**Dynamic Pages**
```nginx
location / {
    proxy_cache_bypass $http_pragma;  # Don't cache if pragma: no-cache
    add_header Cache-Control "public, max-age=0, must-revalidate";
}
```

### Output Standalone Mode (Optional)

For minimal production build (only node_modules + .next):

```javascript
// next.config.js
module.exports = {
  output: 'standalone',
}
```

Then build includes only necessary dependencies in `.next/standalone/`

Start with:
```bash
pm2 start "node .next/standalone/server.js" --name "np-police"
```

### Database Connections

If using databases (Prisma, MongoDB, etc.):

```bash
# Test connection before deploying
pm2 restart np-police
pm2 logs np-police | head -20

# Connection pooling recommended
# Example Prisma: set DATABASE_URL with connection pooling string
```

### Session Management

If using authentication/sessions:
- Use external session store (Redis, database) - NOT in-memory
- Sessions lost if PM2 restarts
- Configure `SESSION_SECRET` in .env.production

### Disable Telemetry

```bash
# In production environment
echo "NEXT_TELEMETRY_DISABLED=1" >> /var/www/np-police-hackathon/.env.production

# Verify
pm2 logs np-police | grep -i telemetry
```

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt](https://letsencrypt.org/)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/)

---

## Support

For issues and questions:
1. Check the [Troubleshooting](#troubleshooting) section
2. Review PM2 and Nginx logs
3. Refer to official documentation links above
4. Contact development team

