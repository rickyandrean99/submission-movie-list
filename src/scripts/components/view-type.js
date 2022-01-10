class ViewType extends HTMLElement {
    connectedCallback() {
        $(this).html(`
            <input type="button" class="btn btn-success fw-bold" value="Grid" id="buttonGrid">
            <input type="button" class="btn btn-danger fw-bold" value="List" id="buttonList">
        `)
    }
}

customElements.define('view-type', ViewType)