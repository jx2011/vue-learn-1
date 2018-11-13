// 基础路径 注意发布之前要先修改这里
var baseUrl = '/';

module.exports = {
    baseUrl: './',
    devServer: {
        port: 8089,
        publicPath: baseUrl, // 和 baseUrl 保持一致
    },
    outputDir: 'dist',
    assetsDir: 'statics',
}