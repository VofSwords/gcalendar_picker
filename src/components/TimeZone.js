import {select, option, div} from "./DOMComponents.js";

export default function TimeZone(props = {}) {
    this.inputHandler = props.inputHandler;
    this.selected = props.selected;
    if (props.title)
        this.title.class = props.title.class;
    this.class = props.class;
};

TimeZone.prototype.create = function() {
    const timeZones = [
        {
          offset: 'GMT -12:00',
          value: -720,
        },
        {
          offset: 'GMT -11:00',
          value: -660,
        },
        {
          offset: 'GMT -10:00',
          value: -600,
        },
        {
          offset: 'GMT -09:00',
          value: -540,
        },
        {
          offset: 'GMT -08:00',
          value: -480,
        },
        {
          offset: 'GMT -07:00',
          value: -420,
        },
        {
          offset: 'GMT -06:00',
          value: -360,
        },
        {
          offset: 'GMT -05:00',
          value: -300,
        },
        {
          offset: 'GMT -04:30',
          value: -270,
        },
        {
          offset: 'GMT -04:00',
          value: -240,
        },
        {
          offset: 'GMT -03:30',
          value: -210,
        },
        {
          offset: 'GMT -03:00',
          value: -180,
        },
        {
          offset: 'GMT -02:00',
          value: -120,
        },
        {
          offset: 'GMT -01:00',
          value: -60,
        },
        {
          offset: 'GMT 00:00',
          value: 0,
        },
        {
          offset: 'GMT +01:00',
          value: 60,
        },
        {
          offset: 'GMT +02:00',
          value: 120,
        },
        {
          offset: 'GMT +03:00',
          value: 180,
        },
        {
          offset: 'GMT +03:30',
          value: 210,
        },
        {
          offset: 'GMT +04:00',
          value: 240,
        },
        {
          offset: 'GMT +04:30',
          value: 270,
        },
        {
          offset: 'GMT +05:00',
          value: 300,
        },
        {
          offset: 'GMT +05:30',
          value: 330,
        },
        {
          offset: 'GMT +05:45',
          value: 345,
        },
        {
          offset: 'GMT +06:00',
          value: 360,
        },
        {
          offset: 'GMT +06:30',
          value: 390,
        },
        {
          offset: 'GMT +07:00',
          value: 420,
        },
        {
          offset: 'GMT +08:00',
          value: 480,
        },
        {
          offset: 'GMT +08:45',
          value: 525,
        },
        {
          offset: 'GMT +09:00',
          value: 550,
        },
        {
          offset: 'GMT +09:30',
          value: 570,
        },
        {
          offset: 'GMT +10:00',
          value: 600,
        },
        {
          offset: 'GMT +11:00',
          value: 660,
        },
        {
          offset: 'GMT +11:30',
          value: 690,
        },
        {
          offset: 'GMT +12:00',
          value: 720,
        },
        {
          offset: 'GMT +13:00',
          value: 780,
        },
        {
          offset: 'GMT +14:00',
          value: 840,
        },
      ];
    const wrapper = div();
    const title = div();
    const input = select();

    if (this.title)
        title.className = this.title.class || "";
    title.innerHTML = "Timezone";
    wrapper.appendChild(title);

    input.className = this.class || "";
    input.addEventListener("input", this.inputHandler);
    input.setAttribute("name", "timezone");
    for (let i = 0; i < timeZones.length; i++) {
        let element = option();
        element.setAttribute("value", timeZones[i].value);
        if (timeZones[i].value === this.selected)
            element.setAttribute("selected", "");
        element.innerHTML = timeZones[i].offset;
        input.appendChild(element);
    };
    wrapper.appendChild(input);

    return wrapper;
};