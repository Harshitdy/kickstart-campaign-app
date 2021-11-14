const { createServer } = require('http');

const next = require('next');

const app = next({
    dev: process.env.NODE_ENV != 'production'
});

const routes = require('./routes');
const hander = routes.getRequestHandler(app);

app.prepare().then(() => {
    createServer(hander).listen(3000, (err) => {
        if (err) throw err;
        console.log('ready to localhost:3000');
    });
});