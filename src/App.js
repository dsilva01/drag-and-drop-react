import React, { useState } from "react";
import Draggable from 'react-draggable';
import logo from './logo.svg';
import './App.css';

function App() {
  const [boxes, setBoxes] = useState([])
  const [alt, setAlt] = useState(0);
  const handleClick = () => {
    // const value = Math.floor(Math.random()*10);
    // console.log(value);
    // boxes.push(value);
    // console.log(boxes);
    // console.log(11111111111);
    const d= boxes;
    d.push(alt+1);
    setBoxes(d);
    setAlt(alt+1);
    // console.log(alt);
  }
  

  return (
    <div className="App">
      <button onClick={()=>handleClick()}>click</button>
      <h1>{alt}</h1>
      {boxes.map(item => (
        // <div key={item}>
          <Draggable
          key={item}
          // defaultPosition={{x:0, y:0}}
          position={null}
          scale={1}          
          positionOffset={{x: '0%', y: '0%'}}
          >
            <div className="box">{item}</div>
          </Draggable>
        // </div>
      ))}
    </div>
  );
}

export default App;
