export function Label(props) {
    const { htmlFor, className, content, children } = props || {};

    return (
        <>
            <label htmlFor={htmlFor} className={className}>
                {content}
                {children}
            </label>
        </>
    );
}
