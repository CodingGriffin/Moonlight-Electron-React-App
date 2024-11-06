import express from 'express';
import { google } from 'googleapis';
import cors from 'cors';
import { ipcMain } from 'electron';
import axios from 'axios';

const app = express();
const PORT = 3001; // Choose a port for your server

const CLIENT_ID =
  '368030744985-v4ibmcdnk52s8l4uotmqbdugq9iqh6kl.apps.googleusercontent.com'; // Replace with your Client ID
const CLIENT_SECRET = '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'; // Replace with your Client Secret
const REDIRECT_URI = 'http://localhost:3001/auth/google/callback'; // Redirect URI for OAuth

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI,
);

app.use(cors());

// Route to initiate OAuth flow
app.get('/auth/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/gmail.send',
    ],
  });
  res.redirect(authUrl);
});

// Callback route to handle the redirect from Google
app.get('/auth/google/callback', async (req, res) => {
  const { code } = req.query;

  if (code) {
    const { tokens } = await oauth2Client.getToken(code);
    oauth2Client.setCredentials(tokens);
    await axios.post('http://localhost:5000/api/user/google_auth', {
      token: tokens,
    });
    // Optionally, get user info
    // const oauth2 = google.oauth2({ auth: oauth2Client, version: 'v2' });
    // const userInfo = await oauth2.userinfo.get();
    // Send user info back to the Electron app
    res.send('1123');
    ipcMain.emit('tokenReceived', tokens);
  } else {
    res.send('No code received');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
