export default (() => {
    Object.defineProperty(String, 'capitalize', {
        value: function () {
            return this.charAt(0).toUpperCase().concat(this.slice(1))
        }
    })
})()
