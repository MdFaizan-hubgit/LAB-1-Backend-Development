SMART UTILITY TOOLKIT
Lab Assignment 1 - Web Dev III (Node.js)

Requirements:
- Node.js installed
- No external npm packages required

Files:
calculator.js  - CLI calculator using process.argv
isEven.js      - Custom reusable module
checkNumber.js - Uses the isEven module
server.js      - Basic HTTP server with multiple routes
fileManager.js - Creates, reads, updates and deletes a file
 dice.js       - Random dice generator using crypto

Run commands from this folder:

node calculator.js add 10 5
node calculator.js subtract 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
node checkNumber.js
node server.js
node fileManager.js
node dice.js

HTTP server routes (after running node server.js):
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/contact
http://localhost:3000/test  (404 example)

Stop the server with Ctrl+C.
