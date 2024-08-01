import React from 'react'

const Input = (props: any) => {
  return (
    <div>
      <input {...props}>{props.label}</input>
    </div>
  )
}

export default Input
