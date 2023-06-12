import React from 'react'

function Input(props) {
  {name='', placeholder = '', value = '', type, onChange, disabled } = props
  return (

    <div>
      {name ? name : placeholder}
      <input value={value} type={type} onChange={onChange} placeholder={placeholder}>
      
      </input>


    </div>
  )
}

export default Input