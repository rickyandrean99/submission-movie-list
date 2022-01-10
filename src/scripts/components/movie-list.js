class MovieList extends HTMLElement {
    set genres(genres) {
        this._genres = genres
    }
    
    set movies(movies) {
        this._movies = movies
        this.render()
    }

    render() {
        let element = `<div class="row p-3 flex-wrap">`
        
        this._movies.forEach(movie => {
            let genre = ''

            movie.genre_ids.forEach((id, index) => {
                genre += (this._genres.find(genre => genre.id === id)).name
                if (movie.genre_ids.length - 1 != index) genre += ", "
            })

            element += `
                <div class="col-12 col-sm-6 col-lg-4 py-4 px-4 py-sm-4 px-sm-5 p-lg-5 text-white">
                    <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="w-100 d-block m-auto rounded-3 shadow">
                    <div class="h5 mt-4">${movie.title}</div>
                    <div class="mt-2">${genre}</div>
                </div>
            `
        })
        
        element += `</div>`
        $(this).html(element)
    }
}

customElements.define("movie-list", MovieList)