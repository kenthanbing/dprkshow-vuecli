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
        exhibitor: {
            entry: './src/exhibitor/exhibitor.js',
            template: './public/exhibitor.html',
        },
        buyer: {
            entry: './src/buyer/buyer.js',
            template: './public/buyer.html',
        },        
    }  
}
