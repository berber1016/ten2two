import React from "react";
import { conversionOfNumbers } from './core/index'
const App: React.FC = (props:any) => {
  return <div>ten 2 two

    <div>
      {conversionOfNumbers('Decimal','Binary',5.75)}
      <span>间隔</span>
      {conversionOfNumbers('Binary','Decimal',101.11)}
    </div>
  </div>;
};

export default App;