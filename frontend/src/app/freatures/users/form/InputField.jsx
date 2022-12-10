export function InputField(props) {
    const { InputField, classes } = props;
    return (
        <div>
            <label htmlFor={InputField.input.name} className={classes.label}>
                {InputField.label.name}
            </label>
            <input
                type={InputField.input.type}
                name={InputField.input.name}
                id={InputField.input.name}
                className={classes.textField}
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values[InputField.input.name]}
            />
            {props.errors[InputField.input.name] ? (
                <p className="pt-2 text-sm text-red-600">
                    {' '}
                    {props.errors[InputField.input.name]}
                </p>
            ) : null}
        </div>
    );
}
