const http = require('http');
const url = require('url');

const rootModule = require('./modules/root_module');
const aboutModule = require('./modules/about_module');
const contactModule = require('./modules/contact_module');
const galleryModule = require('./modules/gallery_module');
const notFoundModule = require('./modules/not_found_module');
const footerModule = require('./modules/footer_module');

const name = "Angelene Guiao";
const port = 3002;

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    
    let content = "";
    let statusCode = 200;

    switch (pathName) {
        case "/":
            content = rootModule(name);
            break;
        case "/about":
            content = aboutModule(name);
            break;
        case "/contact":
            content = contactModule(name);
            break;
        case "/gallery":
            content = galleryModule(name);
            break;
        default:
            statusCode = 404;
            content = notFoundModule(name);
    }

    content += footerModule("Angelene Guiao", "July 18, 2025", "BSIT WD301");

    res.writeHead(statusCode, { 'Content-Type': 'text/html' });
    res.end(content);
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
