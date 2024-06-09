import React from 'react'

const Square = ({ colorValue='Empty Color Value', isDarkText }) => {
  return (

    <section
        className='square'
        style={{ 
            backgroundColor: colorValue,
            color: isDarkText ? '#000' : '#FFF' 
        }}
    >
        <p>{colorValue ? colorValue : 'Empty Value'}</p>
    </section>
  )
}

export default Square