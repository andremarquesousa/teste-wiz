const proxy = [
    {
        context: '/api',
        target: 'https://developers.themoviedb.org/3/movies/get-upcoming',
        pathRewrite: {'^/api' : ''}
    }
];
module.exports = proxy;