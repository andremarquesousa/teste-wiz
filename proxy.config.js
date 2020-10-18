const proxy = [
    {
        "/api/*": {
            "target": "https://developers.themoviedb.org/3/movies/get-upcoming",
            "secure": false,
            "logLevel": "debug"
        }
    },
    {
        "/api/*": {
            "target": "https://viacep.com.br/ws/'",
            "secure": false,
            "logLevel": "debug"
        }
    }
];
module.exports = proxy;