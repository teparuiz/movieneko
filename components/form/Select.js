import React from 'react'

function Select(props) {

  {name = '', placeholder, required, value = '', onChange, disabled, options= []} = props 


  const _onChange =(value) => {
    if(value) onChange(value) 
  }
  return (
    <div>
      <select id={_onChange}>
        {options.map((item, index) => (<option key={index} value={item.value}> {item.name}
        </option>))}
      </select>
    </div>
  )
}

export default Select