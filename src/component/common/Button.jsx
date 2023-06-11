import React from 'react'
import "./../../styles/style.css"
const Button = ({name, height, width , fontSize, backgroundColor}) => {
  console.log("aaaaaaaa",backgroundColor)
  return (
    <div>
      <button style={{ height, width, fontSize, backgroundColor }} className='button' >{name}</button>
    </div>
  )
}

export default Button
