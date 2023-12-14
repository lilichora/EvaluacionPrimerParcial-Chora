class ContenedorComponent extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({ mode: 'open' });

        const contenedor = document.createElement('div');

        //crear los slots
        const headerSlot = document.createElement('slot');
        headerSlot.name = 'header';
        contenedor.appendChild(headerSlot);

        const contentSlot = document.createElement('slot');
        contentSlot.name = 'content';
        contenedor.appendChild(contentSlot);

        shadow.appendChild(contenedor);
    }
}

customElements.define('contenedor-component', ContenedorComponent);
