import App from './src/App.js';

(function () {
    let app = new App();
    let root = document.getElementById("root");
    root.innerHTML = "";
    root.appendChild(app.create());
})();