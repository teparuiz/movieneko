import React from 'react'

function Select(props) {

  {name = '', placeholder, required, value = '', onChange, disabled, options= []} = props 
  return (
    <div>
      <select>
        {options.map((item, index) => (<option key={index} value={item.value}> {item.name}
        </option>))}
      </select>
    </div>
  )
}

export default Select