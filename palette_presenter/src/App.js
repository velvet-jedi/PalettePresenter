import Square from './Square';
import Input from './Input';
import {useState} from 'react';


function App() {
  const [colorValue, setColorValue] = useState('')
  return (
    <div className='App'>
      <Square colorValue={colorValue}></Square>
      <Input 
        colorValue={colorValue}
        setColorValue={setColorValue}
      ></Input>
      
    </div>
  );
}

export default App;
