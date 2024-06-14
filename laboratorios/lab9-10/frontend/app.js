(() => {
  const App = {
    htmlElements: {
      form: document.querySelector('form'),
    },
    init() {
      App.bindEvents();
    },
    bindEvents() {
      App.htmlElements.form.addEventListener('submit', App.events.handleSubmit);
    },
    events: {
      async handleSubmit(event) {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const response = await fetch('http://localhost:3000', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name }),
        });
        const data = await response.json();
        console.log(data);
      },
    },
  }
  App.init();
})();
