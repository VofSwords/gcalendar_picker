const CE = function(nodeName) {
    return document.createElement(nodeName);
};

function div() {
    return CE("div")
};
function input() {
    return CE("input");
};
function button() {
    return CE("button");
};
function form() {
    return CE("form");
};
function a() {
    return CE("a");
};
function select() {
    return CE("select");
};
function option() {
    return CE("option");
};

export {
    div,
    input,
    button,
    form,
    a,
    select,
    option
};