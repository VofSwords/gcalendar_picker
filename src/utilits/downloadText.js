import {a} from "../components/DOMComponents.js";

export default function download(text) {
    let element = a();
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', 'chipchik-calendar.pst');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
    
    return true;
  };