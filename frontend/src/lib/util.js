export function except(obj, properties) {
    const props = {};
    const rest = {};
    for (let key in obj) {
        if (!Object.prototype.hasOwnProperty.call(obj, key)) return;
        if (properties.indexOf(key) >= 0) {
            props[key] = obj[key];
        } else {
            rest[key] = obj[key];
        }
    }
    return [props, rest];
}

export const camelCaseToString = (str) => str.split(/(?=[A-Z])/).join(' ');

export default (() => {
    Object.defineProperty(String, 'capitalize', {
        value: function () {
            return this.charAt(0).toUpperCase().concat(this.slice(1));
        },
    });
})();

Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
};
