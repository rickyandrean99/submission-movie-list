class SearchBar extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        $(this).html(`
            <div class="input-group search-bar mt-3">
                <span class="input-group-text" style="background: none; outline: none; border: 0"><i class="bi-search text-white"></i></span>
                <input type="text" id="search" class="form-control text-white" placeholder="Search Movie by Title" style="background: none; outline: none; border: 0">
            </div>
        `)
    }
}

customElements.define("search-bar", SearchBar)