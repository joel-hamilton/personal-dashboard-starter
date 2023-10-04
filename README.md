# Personal Dashboard Starter

## Overview
Here's a starter app! I left a bunch of comments in the code, but basically here's how it works:
- the browser loads `index.html`
  - `index.html` loads `style.css` and `index.js`
  - `index.js` calls our server every 15 mins and updates the webpage with the current temperature
- the server (`server.js`) runs separately, not in the browser. It receives a request from the browser and makes a request to openweathermap, returning the response. The server needs to be in the middle between the browser and openweathermap simply because there are private keys involved and they can't live in the browser (anyone can see them).

## To Run
- (first time setup only) install node v18 on your mac, this is needed to run `server.js` on your computer (remember it won't run in the browser, like `index.js` will)
- fill in the missing api key in `server.js` (don't commit this if you ever get to using git, bit it's ok to live in that file if you're just developing on your local computer)
- open a terminal window and navigate to this folder
- run `node server.js` to start your server and begin listening for requests
- open `index.html` in your browser (you should just be able to right-click and "Open with Chrome", or if not, just paste the file location in your URL bar in this format: `file:///Users/you/Desktop/dashboard/index.html`)
