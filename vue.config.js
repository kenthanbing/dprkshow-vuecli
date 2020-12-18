module.exports = {
    pages: {
        index: {
            entry: './src/index.js',
            template: './public/index.html',
            },
        articles: {
            entry: './src/articles.js',
            template: './public/articles.html',
        },
        article: {
            entry: './src/article.js',
            template: './public/article.html',
        },
    }  
}
