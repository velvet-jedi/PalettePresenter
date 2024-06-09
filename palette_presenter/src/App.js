import Square from './Square';
import Input from './Input';
import {useState} from 'react';


function App() {
  const [colorValue, setColorValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)
  return (
    <div className='App'>
      <Square 
        colorValue={colorValue}
        isDarkText={isDarkText}        
      >
      </Square>
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue} 
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}       
      ></Input>
      
    </div>
  );
}

export default App;
