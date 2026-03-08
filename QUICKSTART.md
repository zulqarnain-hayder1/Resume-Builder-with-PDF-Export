# 🚀 Quick Start Guide

Get the Resume Builder up and running in 3 minutes!

## Prerequisites Check

Make sure you have Node.js installed:
```bash
node --version
# Should show v14.0.0 or higher
```

## Installation & Setup

### Step 1: Install Dependencies

Open **two terminal windows** in the project root directory.

**Terminal 1 - Install Frontend:**
```bash
cd frontend
npm install
```

**Terminal 2 - Install Backend:**
```bash
cd backend
npm install
```

Wait for both installations to complete (usually 1-2 minutes).

### Step 2: Start the Servers

Keep both terminals open.

**Terminal 1 - Start Frontend:**
```bash
npm run dev
```
✅ Frontend running at: `http://localhost:5173`

**Terminal 2 - Start Backend:**
```bash
npm start
```
✅ Backend running at: `http://localhost:5000`

### Step 3: Open the App

Open your browser and go to:
```
http://localhost:5173
```

## Quick Test

1. Click **"Create Your Resume"**
2. Fill in your name, email, and phone (*required*)
3. Add some education, skills, or experience
4. Watch the **live preview** update!
5. Choose a template (Modern or Classic)
6. Click **"Download Resume as PDF"**

Your resume PDF will download automatically! 🎉

## Common Issues

### "Port 5000 already in use"
Windows users: Another app might be using port 5000.

**Solution:**
```bash
# In backend/server.js, you can change the port:
const PORT = process.env.PORT || 5001;
```

Then update `frontend/vite.config.js`:
```javascript
proxy: {
  '/api': {
    target: 'http://localhost:5001',  // Changed to 5001
    ...
  }
}
```

### "Cannot connect to backend"
Make sure:
1. Backend server is running (Terminal 2)
2. You see "✅ Server is running on http://localhost:5000"
3. No firewall is blocking the connection

### "npm install" fails
Try:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

## That's It! 🎊

You're ready to build amazing resumes!

### What's Next?

- Customize the templates in `backend/utils/pdfGenerator.js`
- Add more form fields in `frontend/src/components/ResumeForm.jsx`
- Change colors in `frontend/tailwind.config.js`
- Add more templates in the template selector

### Need Help?

Check the full [README.md](README.md) for detailed documentation.

---

Happy Coding! 💻✨
