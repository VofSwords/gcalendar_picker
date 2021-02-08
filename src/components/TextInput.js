import input from "./Input.js";

export default function TextInput(props) {
    input.call(this, props);

    this.attributes.autocomplete = "off";
    this.attributes.type = "text";
    this.event.type = "input";
};

TextInput.prototype = input.prototype;