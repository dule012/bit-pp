const getMovie = (url, handleMovie) => {
    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((movieObject) => {
            handleMovie(movieObject.name, movieObject.id);
        })
};

getMovie('https://api.tvmaze.com/shows/4', (name, id) => {
    console.log(name,id)
});