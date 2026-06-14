# DecodeLabs Chatbot - Troubleshooting Guide

## Issue: "Error connecting to server"

If you're seeing "Error connecting to server" when trying to send messages, follow these steps:

### Step 1: Clear Browser Cache

The most common cause of this error is a **cached version** of the old HTML file that doesn't have a working server.

**For Chrome/Edge:**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "All time" for the time range
3. Check "Cookies and other site data" and "Cached images and files"
4. Click "Clear data"
5. Refresh the page with `Ctrl+F5` or `Cmd+Shift+R`

**For Firefox:**
1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Everything" for the time range
3. Click "Clear Now"
4. Refresh the page with `Ctrl+F5` or `Cmd+Shift+R`

**For Safari:**
1. Click "Safari" → "Preferences"
2. Go to "Privacy" tab
3. Click "Manage Website Data"
4. Find your domain and click "Remove"
5. Refresh the page with `Cmd+Shift+R`

### Step 2: Verify the Server is Running

Make sure the Node.js server is actually running:

```bash
# Navigate to the project directory
cd /path/to/DecodeLabs-InternshipTask1

# Install dependencies (if not already done)
npm install

# Start the server
npm start
```

You should see:
```
🤖 DecodeLabs Chatbot server is running on http://localhost:3000
Open your browser and navigate to http://localhost:3000
```

### Step 3: Access the Application

Open your browser and navigate to:
```
http://localhost:3000
```

### Step 4: Test the Chatbot

Try sending one of these messages:
- "hello"
- "what is ai"
- "help"
- "tell me a joke"

### Step 5: Check Browser Console for Errors

If the issue persists:

1. Open the browser's Developer Tools:
   - Chrome/Edge: Press `F12`
   - Firefox: Press `F12`
   - Safari: Press `Cmd+Option+I`

2. Go to the "Console" tab

3. Try sending a message and look for any error messages

4. Share the error message if you need help

## What Changed?

The original repository had a serverless API handler (`api/chatbot.js`) that wasn't designed to run as a standalone server. I've added:

1. **server.js** - A proper Express.js server that:
   - Serves the static HTML/CSS/JavaScript files
   - Routes API requests to the chatbot handler
   - Handles CORS headers properly
   - Listens on port 3000

2. **Updated package.json** - Now points to `server.js` as the entry point

## Still Having Issues?

If you're still seeing errors after following these steps:

1. Make sure you've pulled the latest changes from GitHub:
   ```bash
   git pull origin main
   ```

2. Delete `node_modules` and reinstall:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Try a different port (in case 3000 is already in use):
   ```bash
   PORT=8080 npm start
   ```
   Then access it at `http://localhost:8080`

## Technical Details

**Root Cause:** The original `api/chatbot.js` is a Vercel serverless function that exports a request handler. It doesn't start an HTTP server, so when run locally with `node api/chatbot.js`, there was nothing listening for requests.

**Solution:** Created `server.js` which:
- Imports Express and the chatbot handler
- Sets up proper middleware for CORS, JSON parsing, and static file serving
- Routes POST/GET/OPTIONS requests to `/api/chat` through the handler
- Serves `public/index.html` as the main page
- Listens on port 3000 (or the PORT environment variable)

This allows the application to work both locally and on deployment platforms like Vercel.
