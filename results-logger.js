// Results Logger - sends game results to Google Sheets
//
// IMPORTANT: Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

function logResult(data) {
  // Don't send if URL not configured
  if (SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
    console.log('Results logging not configured. Data:', data);
    return;
  }

  // Add user agent for device identification
  data.userAgent = navigator.userAgent;

  // Send to Google Sheets (fire and forget)
  fetch(SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Required for Apps Script
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  }).catch(err => {
    console.log('Failed to log result:', err);
  });
}
