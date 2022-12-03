import { memo, useEffect, useRef } from 'react'

const Item = memo((props) => {

    const { attributes, label, options, onChange } = props || {}
    const isMounted = useRef(false)


    useEffect(() => {
        isMounted.current = true
        console.log('element updated/mounted : ', attributes.name)

        return () => {
            isMounted.current = false
            console.log('element unmounted : ', attributes.name)
        }
    }, [attributes.name])
    // debugger

    return (
        <>
            {
                label ?
                    <label htmlFor={attributes.name} className={label.className}>
                        {label.value}
                    </label>
                    : ''
            }
            <input
                name={attributes.name}
                type={attributes.type}
                value={attributes.value}
                id={attributes.name}
                className={attributes.className}
                {...options}
                onChange={onChange}
            />
        </>
    )
})
export default Item;
