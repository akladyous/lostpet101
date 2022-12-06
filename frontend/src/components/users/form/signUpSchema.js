
export const SignUpSchema = [
    {
        attributes: { name: 'email', type: 'email', className: 'form-control' },
        label: { value: 'Email Address', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password', type: 'password', className: 'form-control' },
        label: { value: 'password', className: 'form-label' },
        options: {}
    },
    {
        attributes: { name: 'password_confirmation', type: 'password', className: 'form-control' },
        label: { value: 'password confirmation', className: 'form-label' },
        options: {}
    },
];
