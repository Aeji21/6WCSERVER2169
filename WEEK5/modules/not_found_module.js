// modules/not_found_module.js
module.exports = function(name) {
    return `
        <html>
            <head><title>404 - Not Found</title></head>
            <body>
                <h1>Invalid Request</h1>
            </body>
        </html>
    `;
};
