import React from 'react'

const Button = (props: any) => {
    return (
        <div>
            <button {...props} >{props.label}</button>
        </div>
    )
}

export default Button
