import * as components from "./components/chaining.js"
import {div, form} from "./components/DOMComponents.js";
import download from "./utilits/downloadText.js";
import {dateToMashineFormat, addMinutes, dateToHumanFormat} from "./utilits/dateFormating.js";

export default function App() {
    const MILLISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
    let today = new Date();

    this.title = "";
    this.location = "";
    this.description = "";
    this.start = +today;
    this.end = +today + MILLISECONDS_IN_A_DAY;
    this.timezone = today.getTimezoneOffset() * (-1);
    this.inputHandler = this.inputHandler.bind(this);
    this.gcHandler = this.gcHandler.bind(this);
    this.goHandler = this.goHandler.bind(this);
    this.dateInputHandler = this.dateInputHandler.bind(this);
};

App.prototype = {
    get googleCalendarLink() {
        let link =
            'http://www.google.com/calendar/event?action=TEMPLATE' +
            '&dates=' +
            this.formatedStart +
            '%2F' +
            this.formatedEnd +
            '&text=' +
            this.title +
            '&location=' +
            this.location +
            '&details=' +
            this.description;
    
        return link;
    },
    
    get outlookFile() {
        return `BEGIN:VCALENDAR
            VERSION:2.0
            PRODID:-//Our Company//NONSGML v1.0//EN
            BEGIN:VEVENT
            UID:me@google.com
            DTSTAMP:${this.start}
            ORGANIZER;CN=Me:MAILTO::me@gmail.com
            DTSTART:${this.start}
            DTEND:${this.end}
            SUMMARY:${this.title}
            END:VEVENT
            END:VCALENDAR`;
    },

    get formatedStart() {
        return dateToMashineFormat(addMinutes(this.start, this.timezone));
    },

    get formatedEnd() {
        return dateToMashineFormat(addMinutes(this.end, this.timezone));
    },

    create: function() {
        const wrapper = div();
        const mainForm = form();
        const titleInput = new components.TextInput({
            title: {
                value: "Title",
                class: "input_title"
            },
            attributes: {
                required: "",
                name: "title"
            },
            event: {
                handler: this.inputHandler
            }
        });
        const locationInput = new components.TextInput({
            title: {
                value: "Location",
                class: "input_title"
            },
            attributes: {
                name: "location"
            },
            event: {
                handler: this.inputHandler
            }
        });
        const descriptionInput = new components.TextInput({
            title: {
                value: "Description",
                class: "input_title"
            },
            attributes: {
                name: "description"
            },
            event: {
                handler: this.inputHandler
            }
        });
        const startInput = new components.TextInput({
            title: {
                value: "Start"
            },
            attributes: {
                name: "start",
                value: dateToHumanFormat(this.start)
            },
            event: {
                handler: this.dateInputHandler
            }
        });
        const endInput = new components.TextInput({
            title: {
                value: "End"
            },
            attributes: {
                name: "end",
                value: dateToHumanFormat(this.end)
            },
            event: {
                handler: this.dateInputHandler
            }
        });
        const timeZone = new components.TimeZone({
            inputHandler: this.inputHandler,
            selected: this.timezone,
            class: "time_settings"
        });
        const gcButton = new components.Button({
            class: "main_button",
            title:  "GOOGLE CALENDAR",
            type: "submit"
        });
        const goButton = new components.Button({
            title: "GETOUTLOOK",
            type: "button",
            clickHandler: this.goHandler
        });
        
        [
            titleInput, locationInput, descriptionInput,
            startInput, endInput, timeZone,
            gcButton, goButton
        ].forEach(function(element) {
            mainForm.appendChild(element.create());
        });
        mainForm.addEventListener("submit", this.gcHandler);
        mainForm.setAttribute("method", "POST");
        wrapper.appendChild(mainForm);

        return wrapper;
    },
    inputHandler: function(event) {
        this[event.target.name] = event.target.value;
    },
    dateInputHandler: function(event) {
        this[event.target.name] = +(new Date(event.target.value));
    },
    gcHandler: function() {
        window.open(this.googleCalendarLink);
    },
    goHandler: function() {
        if (this.title)
            download(this.outlookFile);
    }
};