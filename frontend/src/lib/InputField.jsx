import { memo, } from 'react'

const InputField = (props) => {
    const { attributes, label, options, value, onChange } = props || {}
    return (
        <>
            <label htmlFor={attributes.name} className={label.className}>
                {label.value}
            </label>
            <input
                {...attributes}
                {...options}
                id={attributes.name}
                value={value}
                onChange={onChange}
            />
        </>
    )
};
export const MemoizedComponent = memo(InputField)
