import React from 'react'

const Image = (props: any) => {
    return (
        <div>
            <img {...props}  alt={props.alt} src={props.src}></img>
        </div>
    )
}

export default Image
