// modules/about_module.js
module.exports = function(name) {
    return `
        <html>
            <head><title>About</title></head>
            <body>
                <h1>This is the about Page</h1>
                <p>Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js</p>
            </body>
        </html>
    `;
};
