import React, { useState } from "react";
import { conversionOfNumbers } from './core/index'
const App: React.FC = (props:any) => {
    const [input1,setInput1] = useState(5.75);
    const [input2,setInput2] = useState(101.11)
  return (
    <div>
      <div>
      <span>10 to 2 <input type="text" onChange={(e) => setInput1(Number(e?.target?.value))} /> </span>
      {conversionOfNumbers('Decimal','Binary',input1)}
      </div>
      <div>
      <span>2 to 10 <input type="text" onChange={(e) => setInput2(Number(e?.target?.value))} /></span>
      {conversionOfNumbers('Binary','Decimal',input2)}
      </div>
      
    </div>
  );
};

export default App;