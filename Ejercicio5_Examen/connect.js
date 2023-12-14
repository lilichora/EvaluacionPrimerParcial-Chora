// counter-component.js
class CounterComponent extends HTMLElement {
    constructor() {
      super();
      this._counter = 0;
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <div class="container mt-4">
          <div class="text-center">
            <p class="display-4">Count: ${this._counter}</p>
            <button id="increment" class="btn btn-primary">+</button>
            <button id="decrement" class="btn btn-danger">-</button>
          </div>
        </div>
      `;
  
      // Asociar listeners después de renderizar
      this.attachListeners();
    }
  
    attachListeners() {
      this.shadowRoot.querySelector('#increment').addEventListener('click', () => {
        this._counter++;
        this.render();
      });
  
      this.shadowRoot.querySelector('#decrement').addEventListener('click', () => {
        this._counter--;
        this.render();
      });
    }
  }
  
  customElements.define('counter-component', CounterComponent);
  