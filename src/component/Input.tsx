import React from 'react'

const Input = (props: any) => {
  return (
    <div>
      <input className={props.className} type={props.type} name={props.name} placeholder={props.placeholder} onChange={props.onChange} value={props.value}>{props.label}</input>
    </div>
  )
}

export default Input
