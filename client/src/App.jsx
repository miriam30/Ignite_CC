import React from 'react';
import ReactDOM from 'react-dom';

/*COMPONENTS*/
import PrimeNum from './component/numbers/NumList.jsx'
const App = () => {
  return (
    <div>
      <h1 > Hello world! </h1>
      <PrimeNum />
    </div>
)
}


ReactDOM.render( < App / > , document.getElementById('app'));
