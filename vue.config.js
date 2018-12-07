// 基础路径 注意发布之前要先修改这里
var baseUrl = '/';
const path = require('path')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
module.exports = {
    baseUrl: './',
    devServer: {
        port: 8089,
        open: true,
        publicPath: baseUrl, // 和 baseUrl 保持一致
    },
    outputDir: 'dist',
    assetsDir: 'statics',
    configureWebpack: {
        resolve: {
            alias: {
                '#': resolve('src'),
            }
        }
    }
}