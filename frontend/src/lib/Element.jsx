import { useEffect, memo } from 'react'
const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1))
const camelCaseToString = str => str.split(/(?=[A-Z])/).join(' ')
function Element(props) {
    console.log(props)
    const {
        name,
        type,
        value,
        label,
        options,
        onChange
    } = props || {};

    return (
        <>
            {props.label ?
                <label htmlFor={label.htmlFor} className={label.className}>
                    {capitalize(label.value)}
                </label>
                : ''
            }

            <input
                type={type}
                name={name}
                value={value}
                id={name}
                className='form-control'
                onChange={onChange}
                {...options}
            />
        </>
    )
}

export const MemoizedComponent = memo(Element)
