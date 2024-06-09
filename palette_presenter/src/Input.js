import React from 'react'

const Input = ({ colorValue, setColorValue, isDarkText, setIsDarkText }) => {
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
        <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >Toggle text color</button>
    </form>
  )
}

export default Input