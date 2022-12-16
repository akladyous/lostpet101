export function ErrorField(props) {
    const { error, touched, children, ...rest } = props || {};
    return error && touched ? (
        <p className="pt-2 text-sm text-red-600" {...rest}>
            {error}
            {children}
        </p>
    ) : null;
}
