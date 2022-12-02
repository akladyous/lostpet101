const signupForm = {
    columns: {
        email: {
            attributes: {
                type: "text",
                name: "email",
                value: "",
            },
            handler: function () { },
            constrains: {},
        },
        password: {
            attributes: {
                type: "password",
                name: "password",
                value: "",
            },
            handler: function () { },
            constrains: {},
        },
        passwordConfirmation: {
            attributes: {
                type: "password",
                name: "passwordConfirmation",
                value: "",
            },
            handler: function () { },
            constrains: {},
        },
    },
    getColumnsName() { return Object.keys(this.columns) }
};

function initialState(columns) {
    return columns.reduce((acc, value) => {
        acc[value] = "";
        return acc;
    }, {});
}
