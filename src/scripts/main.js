import './components/movie-list.js'
import './components/view-type.js'
import './components/search-bar'

function main() {
    document.addEventListener("DOMContentLoaded", async () => {
        try {
            // Fetch api movie
            const genre = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=9f2ec888bf74e369a08ab679c566da02`)
            const movie = await fetch(`https://api.themoviedb.org/3/list/1?api_key=9f2ec888bf74e369a08ab679c566da02`)
            const genreJson = await genre.json()
            const movieJson = await movie.json()

            // Membuat komponen view type (grid & list) dan menampilkan dalam bentuk html
            const viewType = document.createElement("view-type")
            $('#container').before(viewType)

            // Listener untuk button view type
            document.querySelector("#buttonGrid").addEventListener("click", () => movieList.setAttribute("type", "grid"))
            document.querySelector("#buttonList").addEventListener("click", () => movieList.setAttribute("type", "list"))

            // Membuat komponen search bar
            const searchBar = document.createElement("search-bar")
            $('#container').before(searchBar)

            // Listener untuk search bar
            document.querySelector("#search").addEventListener("input", () => movieList.setAttribute("search", search.value))

            // Mengirim data movie dan genre ke component dan menampilkan dalam bentuk html
            const movieList = document.createElement("movie-list")
            movieList.genres = genreJson.genres
            movieList.movies = movieJson.items
            $('#container').append(movieList)
        } catch (error) {
            console.log(`Error message: ${error}`)
        }
    })
}

export default main