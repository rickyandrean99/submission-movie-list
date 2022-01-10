class MovieList extends HTMLElement {
    set genres(genres) {
        this._genres = genres
    }
    
    set movies(movies) {
        this._movies = movies
    }

    connectedCallback() {
        this.type = 'list'
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
                    <div class="col-12 col-sm-6 col-lg-4 py-4 px-4 py-sm-4 px-sm-5 p-lg-5 text-white">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="w-100 d-block m-auto rounded-3 shadow">
                        <div class="h5 mt-4">${movie.title}</div>
                        <div class="mt-2">${genre}</div>
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
                    <div class="col-12 p-3 px-md-2 py-md-3">
                        <div class="row text-white justify-content-center">
                            <div class="col-4 col-md-2">
                                <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" class="w-100 d-block m-auto rounded-3 shadow">
                            </div>

                            <div class="col-8 col-md-6">
                                <div class="h5 mt-1">${movie.title}</div>
                                <div class="mt-2">${genre}</div>
                                <div class="mt-3">${movie.overview}</div>
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