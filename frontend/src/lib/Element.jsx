import { memo } from 'react'
const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1))
const camelCaseToString = str => str.split(/(?=[A-Z])/).join(' ')
function Element(props) {
    console.log(props)
    const { attributes, label, options, onChange } = props || {};

    return (
        <>
            {props.label ?
                <label htmlFor={label.htmlFor} className={label.className}>
                    {capitalize(label.value)}
                </label>
                : ''
            }
            <input {...props.attributes} onChange={onChange} {...options} />
        </>
    )
}
export const MemoizedComponent = memo(Element);
