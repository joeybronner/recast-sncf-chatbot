# SAP x Recast.AI 

![demo](/slides/recast-sncf-bigger.gif)

## Installation

    npm install
    npm start
    http://localhost:3000

If you don't have bower then I did this: 

    npm install -g bower     

## Proxy Settings (important!)

If you are connected to the SAP-Corporate network or through the VPN, please activate the proxy in the server.js file.

    global.useProxy = true;

If the proxy is needed but not activated, the UI will be OK, but all the queries to external services (like RecastAI for example) will crash.
