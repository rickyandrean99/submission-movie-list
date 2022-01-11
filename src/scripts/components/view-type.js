class ViewType extends HTMLElement {
    connectedCallback() {
        $(this).html(`
            <div class="d-flex justify-content-end pe-3 pe-sm-4 pe-md-5 mt-3">
                <button type="button" class="btn" id="buttonGrid"><i class="bi-grid-3x2-gap" style="font-size: 1.8rem;"></i></button>
                <button type="button" class="btn" id="buttonList"><i class="bi-list-ul" style="font-size: 1.8rem;"></i></button>
            </div>
        `)
    }
}

customElements.define('view-type', ViewType)