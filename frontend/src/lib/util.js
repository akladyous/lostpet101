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
