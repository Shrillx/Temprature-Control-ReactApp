import "./styles.css";
import {useState} from 'react';

export default function App() {
  const [tempValue,setTempValue] = useState(24);
  const[tempColor, setTempColor] = useState("neutral");
  function increacseTemprature(){
    if(tempValue === 30) return;

    const newTemp = tempValue+1;

    if(newTemp >= 24 ){
      setTempColor("hot")
    } 
    
    setTempValue(newTemp);

  }
  function decreaseTemprature (){
    if(tempValue === -5) return; 
    const newTemp = tempValue-1;

    if(newTemp < 24 ){
      setTempColor("cold")
    } 
    setTempValue(tempValue-1);
  }

  return (
    <div className="app-container">
      <div className='temperature-display-container'>
        <div className={`temperature-display ${tempColor}`}>{tempValue}°C</div>
      </div>
      <div className='button-container'>
        <button className={tempColor} onClick={increacseTemprature}>+</button>
        <button className={tempColor} onClick={decreaseTemprature}>-</button>
      </div>
      
    </div>
  );
}
