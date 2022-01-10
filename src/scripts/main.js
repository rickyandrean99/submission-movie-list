import './components/movie-list.js'

function main() {
    const fetchMovie = async () => {
        try {
            const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9f2ec888bf74e369a08ab679c566da02`)
            const genreJson = await genre.json()

            const movie = await fetch(`https://api.themoviedb.org/3/list/1?api_key=9f2ec888bf74e369a08ab679c566da02`)
            const movieJson = await movie.json()

            const movieList = document.createElement("movie-list")
            movieList.genres = genreJson.genres
            movieList.movies = movieJson.items

            $('#container').append(movieList)
        } catch (error) {
            console.log(`Error message: ${error}`)
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        fetchMovie()
    })
}

export default main