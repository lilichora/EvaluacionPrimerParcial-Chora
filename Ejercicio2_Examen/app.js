// js/componentes.js
// Componente emisor
class EmisorComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <!-- El componente emisor-component debe tener un botón. -->
                <button id="boton-emisor" class="btn btn-danger">Haz clic</button>
            </div>
        `;

        const botonEmisor = this.querySelector('#boton-emisor');
        // Al hacer clic en el botón, el componente emisor-component emite un evento personalizado con un mensaje.
        botonEmisor.addEventListener('click', () => {
            const customEvent = new CustomEvent('mensajeEnviado', {
                detail: { mensaje: '¡Hola desde el emisor!' }
            });
            document.dispatchEvent(customEvent);
        });
    }
}
customElements.define('emisor-component', EmisorComponent);

// Componente receptor
class ReceptorComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="container mt-4">
                <!-- El componente receptor-component escucha ese evento y muestra el mensaje recibido. -->
                <div id="info-container" class="alert alert-info">Esperando mensaje...</div>
            </div>
        `;

        document.addEventListener('mensajeEnviado', (event) => {
            const infoContainer = this.querySelector('#info-container');
            infoContainer.textContent = event.detail.mensaje;
        });
    }
}
customElements.define('receptor-component', ReceptorComponent);
