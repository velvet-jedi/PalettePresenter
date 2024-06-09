import React from 'react'

const Input = ({ colorValue, setColorValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="colorInput">Add Color Name</label>
        <input 
            type="text" 
            id="colorInput"
            autoFocus
            placeholder='Add Color Name'
            required
            value={colorValue}
            onChange={(e) => setColorValue(e.target.value)}
        />
        <button></button>
    </form>
  )
}

export default Input