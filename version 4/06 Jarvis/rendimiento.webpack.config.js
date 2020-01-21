const merge = require('webpack-merge');
const prod = require('./prod.webpack.config');
const Jarvis = require('webpack-jarvis');

module.exports = merge(prod, {
    plugins: [ new Jarvis({
        watchOnly: false,
    })],
});