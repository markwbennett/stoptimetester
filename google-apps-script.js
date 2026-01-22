// Google Apps Script - Deploy as Web App
//
// SETUP INSTRUCTIONS:
// 1. Go to https://script.google.com and create a new project
// 2. Paste this code
// 3. Click Deploy > New deployment
// 4. Select "Web app" as the type
// 5. Set "Execute as" to "Me"
// 6. Set "Who has access" to "Anyone"
// 7. Click Deploy and copy the Web App URL
// 8. Paste the URL into results-logger.js (SCRIPT_URL variable)

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    const data = JSON.parse(e.postData.contents);

    // Add headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Game',
        'Result',
        'Reaction Time (ms)',
        'Taps',
        'Avg Split (ms)',
        'Taps After Stop',
        'Stop Letter',
        'Stop Color',
        'Baseline Split (ms)',
        'User Agent'
      ]);
    }

    // Append the data row
    sheet.appendRow([
      new Date().toISOString(),
      data.game || '',
      data.result || '',
      data.reactionTime || '',
      data.taps || '',
      data.avgSplit || '',
      data.tapsAfterStop || '',
      data.stopLetter || '',
      data.stopColor || '',
      data.baselineSplit || '',
      data.userAgent || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput('Reaction Time Logger is running')
    .setMimeType(ContentService.MimeType.TEXT);
}
