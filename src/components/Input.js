import {div, input} from "./DOMComponents.js";

export default function Input(props = {}) {
    this.title = Object.assign({}, props.title);
    this.attributes = Object.assign({}, props.attributes);
    this.event = Object.assign({}, props.event);
};

Input.prototype.create = function() {
    const wrapper = div();
    const inputBar = input();

    if (this.title) {
        const title = div();
        title.innerHTML = this.title.value || "";
        title.className = this.title.class || "";
        wrapper.appendChild(title)
    };

    for (let attribute in this.attributes) {
        inputBar.setAttribute(attribute, this.attributes[attribute]);
    };
    inputBar.addEventListener(this.event.type, this.event.handler);
    wrapper.appendChild(inputBar);

    return wrapper;
};