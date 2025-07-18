// modules/root_module.js
module.exports = function(name) {
    return `
        <html>
            <head><title>Home</title></head>
            <body>
                <h1>Welcome to my Node.js Application</h1>
                <p>Welcome ${name}. This is an activity about basics of Node.js</p>
            </body>
        </html>
    `;
};
