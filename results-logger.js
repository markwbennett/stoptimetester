// Results Logger - sends game results to Google Sheets
//
// IMPORTANT: Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

function logResult(data) {
  try {
    // Don't send if URL not configured
    if (!SCRIPT_URL || SCRIPT_URL === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      return;
    }

    // Add user agent for device identification
    data.userAgent = navigator.userAgent;

    // Send to Google Sheets (fire and forget)
    fetch(SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }).catch(() => {});
  } catch (e) {
    // Silently ignore any errors - logging should never affect gameplay
  }
}
