import {button} from "./DOMComponents.js";

export default function Button(props = {}) {
    this.class = props.class;
    this.clickHandler = props.clickHandler;
    this.title = props.title;
    this.type = props.type;
};

Button.prototype.create = function() {
    const element = button();
    
    element.innerHTML = this.title || "";
    element.className = this.class || "";
    if (this.clickHandler)
        element.addEventListener("click", this.clickHandler);
    element.setAttribute("type", this.type || "");

    return element;
};