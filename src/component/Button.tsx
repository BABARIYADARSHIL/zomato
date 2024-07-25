import React from 'react'

const Button = (props: any) => {
    return (
        <div>
            <button className={props.className} name={props.name} onClick={props.onClick}>{props.label}</button>
        </div>
    )
}

export default Button
