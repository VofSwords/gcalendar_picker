function addMinutes(time, offset) {
    const currentOffset = new Date().getTimezoneOffset() * (-1);
    time = new Date(time);
    time.setMinutes(time.getMinutes() + currentOffset - offset);
    return time;
};
function dateToMashineFormat(date) {
    return date.getFullYear() +
        toTwoDigits(String(+date.getMonth() + 1)) +
        toTwoDigits(date.getDate()) + "T" +
        toTwoDigits(date.getHours()) +
        toTwoDigits(date.getMinutes()) +
        toTwoDigits(date.getSeconds());
};
function dateToHumanFormat(date) {
    date = new Date(date);

    return toTwoDigits(String(+date.getMonth() + 1)) + "/" +
        toTwoDigits(date.getDate()) + "/" +
        date.getFullYear() + " " +
        toTwoDigits(date.getHours()) + ":" +
        toTwoDigits(date.getMinutes());
};

function toTwoDigits(string) {
    string = String(string);
    if (string.length < 2) {
        return 0 + string;
    };
    return string;
};

export {
    addMinutes,
    dateToMashineFormat,
    dateToHumanFormat
}