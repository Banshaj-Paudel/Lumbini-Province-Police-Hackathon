# Nepal Police Hackathon - Next.js Application

A modern Next.js application with React, TypeScript, and Tailwind CSS for the Lumbini Police Hackathon.

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in browser
```

---

## Production Hosting on Ubuntu Server

### Step 1: Clone & Build

```bash
cd /var/www/np-police-hackathon
git clone <repository-url> .
npm install
npm run build
```

### Step 2: Start with PM2

```bash
pm2 start npm --name "np-police" -- start
pm2 save
pm2 startup
```

Verify it's running:
```bash
curl http://localhost:3000
```

### Step 3: Setup Nginx & Domain

Configure Nginx reverse proxy to point to localhost:3000 and add your domain.

### Step 4: Setup SSL

Add SSL certificate for your domain using Let's Encrypt or your preferred provider.

---

## Common Commands

```bash
# Check application status
pm2 status

# View logs
pm2 logs np-police

# Restart application
pm2 restart np-police

# Update and redeploy
cd /var/www/np-police-hackathon
git pull
npm install
npm run build
pm2 restart np-police
```

## Troubleshooting

**Application not responding:**
```bash
pm2 logs np-police
curl http://localhost:3000
```

**Rebuild:**
```bash
cd /var/www/np-police-hackathon
npm run build
pm2 restart np-police
```

---

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [PM2 Documentation](https://pm2.keymetrics.io/docs)
- [Nginx Documentation](https://nginx.org/en/docs/)
