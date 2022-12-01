const camelCaseToString = str => str.split(/(?=[A-Z])/).join(' ')

export default (() => {
    Object.defineProperty(String, 'capitalize', {
        value: function () {
            return this.charAt(0).toUpperCase().concat(this.slice(1))
        }
    })
})()


function formData(modelName, columnsName, url, handler) {
    this.modelName = modelName
    this.columnsName = columnsName
    this.url = url
    this.handler = handler
}
formData.prototype.get = function () { }
var prop = ''
const userData = {
    model: 'user',
    url: 'users/signup',
    columns: {
        email: {
            attributes: { type: 'text', name: 'email', className: 'form-control', id: 'email', value: '' },
            handler: function () { },
        }
    },

    get [prop]() {
        this.columns.forEach(col => { })
    }
}
