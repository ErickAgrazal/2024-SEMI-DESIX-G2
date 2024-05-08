(() => {
  const App = {
    htmlElements: {
      form: document.getElementById("form"),
      result: document.getElementById("result"),
    },
    init() {
      App.bindEvents();
    },
    bindEvents() {
      App.htmlElements.form.addEventListener(
        "submit",
        App.handlers.handleSubmit,
      );
    },
    handlers: {
      handleSubmit(event) {
        event.preventDefault();
        const num = parseInt(event.target.num.value);
        const fibonacci = App.methods.fibonacci(num);
        const html = fibonacci.map(App.methods.getHtml).join("");
        App.render(html);

        const cards = document.querySelectorAll(".remove");
        cards.forEach((card) => {
          card.addEventListener("click", App.handlers.handleClick);
        });
      },
      handleClick(event) {
        event.target.parentNode.remove();
      },
    },
    methods: {
      fibonacci(num) {
        const arr = [0, 1];
        for (let i = 2; i < num; i++) {
          arr[i] = arr[i - 1] + arr[i - 2];
        }
        return arr;
      },
      getHtml(num) {
        return `
          <div class="card">
            <div class="remove">X</div>
            <div>${num}</div>
          </div>
        `;
      },
    },
    render(html) {
      App.htmlElements.result.innerHTML = html;
    },
  };
  App.init();
})();
