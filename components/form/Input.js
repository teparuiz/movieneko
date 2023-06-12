import React from 'react'

function Input(props) {
  {name='', placeholder = '', value = '', type, onChange, disabled } = props

  const _onChange =(value) => {if(value) onChange(value)}
  return (

    <div>
      {name ? name : placeholder}
      <input value={value} type={type} onChange={_onChange} placeholder={placeholder} />


    </div>
  )
}

export default Input