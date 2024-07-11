function hacks() {
    var url = 'https://v1hacks.web.app/'; 
    
    var newWindow = window.open('about:blank');
    
    if (newWindow) {
      newWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>1v1lol hacked!</title>
          <style>
            body {
              margin: 0;
            }
            .iframe-container {
              height: 100vh; 
            }
            iframe {
              width: 100%;
              height: 100%;
              border: none;
            }
          </style>
        </head>
        <body>
          <div class="iframe-container">
            <iframe src="${url}"></iframe>
          </div>
        </body>
        </html>
      `);
      newWindow.document.close();
    } else {
      alert('Pop-up blocked! Please allow pop-ups for this site.');
    }
  }