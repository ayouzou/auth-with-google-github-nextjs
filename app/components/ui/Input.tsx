import React from 'react'


interface ElementType {
    name: string,
    placeholder: string
    type?: string,
    className?: string
}
const Input = ({ name, placeholder, type, className }: ElementType) => {
    return (
        <input name={name} type={type} placeholder={placeholder} className={className} />
    )
}

export default Input