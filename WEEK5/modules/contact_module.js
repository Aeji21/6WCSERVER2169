// modules/contact_module.js
module.exports = function(name) {
    return `
        <html>
            <head><title>Contact</title></head>
            <body>
                <h1>This is the Contact Page</h1>
                <p>${name}, if you want additional details about this activity go to this site https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</p>
            </body>
        </html>
    `;
};
