import React from 'react'

const Image = (props: any) => {
    return (
        <div>
            <img className={props.className} alt={props.alt} src={props.src}></img>
        </div>
    )
}

export default Image
