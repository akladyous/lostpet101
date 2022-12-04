import { memo, useEffect } from 'react'

const Item = memo((props) => {
    const { attributes, label, options, value, onChange } = props || {}

    useEffect(() => {
        console.log(`Child mount/update `)
        return () => { console.log(`Child unmount`) }
    }, [value])
    return (
        <>
            <label htmlFor={attributes.name} className={label.className}>
                {label.value}
            </label>
            <input
                name={attributes.name}
                type={attributes.type}
                id={attributes.name}
                className={attributes.className}
                {...options}
                value={value}
                onChange={onChange}
            />
        </>
    )
})
export default Item;
