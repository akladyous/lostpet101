import PropTypes from 'prop-types';
import { useEffect, memo } from 'react'
const capitalize = str => str.charAt(0).toUpperCase().concat(str.slice(1))
const camelCaseToString = str => str.split(/(?=[A-Z])/).join(' ')
function Element(props) {
    const {
        name,
        type,
        value,
        label,
        options,
        onChange
    } = props || {};
    useEffect(() => { console.log('memoized update') }, [])
    return (
        <>
            <label htmlFor={name} className='form-label'>
                {capitalize(label) || capitalize(name)}
            </label>
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
MemoizedComponent.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    options: PropTypes.object,
    onChange: PropTypes.func,


}
