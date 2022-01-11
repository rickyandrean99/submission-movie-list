class MovieList extends HTMLElement {
    set genres(genres) {
        this._genres = genres
    }
    
    set movies(movies) {
        this._movies = movies
    }

    connectedCallback() {
        this.type = 'grid'
        this.render()
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this[name] = newValue
        this.render()
    }

    static get observedAttributes() {
        return ["type"]
    }

    render() {
        $(this).html('')
        let element = `<div class="row p-3 flex-wrap">`

        // jika view type adalah grid
        if (this.type == 'grid') {
            this._movies.forEach(movie => {
                let genre = ''
    
                movie.genre_ids.forEach((id, index) => {
                    genre += (this._genres.find(genre => genre.id === id)).name
                    if (movie.genre_ids.length - 1 != index) genre += ", "
                })
    
                element += `
                    <div class="col-12 col-sm-6 col-lg-4 py-4 px-4 py-sm-4 px-sm-5 py-lg-4 px-lg-5 text-white">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="w-100 d-block m-auto rounded-3 shadow">
                        <div class="movie-title fw-bold mt-4">${movie.title}</div>
                        <div class="movie-text mt-2">${genre}</div>
                    </div>
                `
            })
        // jika view type selain grid seperti list
        } else {
            this._movies.forEach(movie => {
                let genre = ''
    
                movie.genre_ids.forEach((id, index) => {
                    genre += (this._genres.find(genre => genre.id === id)).name
                    if (movie.genre_ids.length - 1 != index) genre += ", "
                })
    
                element += `
                    <div class="col-12 row justify-content-center m-0 p-3 px-md-2 py-md-3">
                        <div class="col-12 col-md-10 col-lg-9 row justify-content-center rounded card-background py-4 px-3">
                            <div class="col-12 col-sm-4 col-lg-3">
                                <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="w-100 d-block m-auto rounded-3 shadow">
                            </div>

                            <div class="col-12 col-sm-8 col-lg-9">
                                <div class="movie-title fw-bold mt-3 mt-sm-2">${movie.title}</div>
                                <div class="movie-text my-1">${movie.vote_average}/10 out of ${movie.vote_count} votes</div>
                                <div class="movie-text mt-3">${genre}</div>
                                <div class="movie-text mt-3">${movie.overview}</div>
                            </div>
                        </div>
                    </div>
                `
            })
        }

        element += `</div>`
        $(this).html(element)
    }
}

customElements.define("movie-list", MovieList)