import React from 'react';
import ReactDOM from 'react-dom';

/*COMPONENTS*/
import PrimeNum from './component/numbers/NumList.jsx'
import Story from './component/Text.jsx'

const App = () => {
  return (
    <div>
      <h1 > Hello world! </h1>
      <PrimeNum />
      <Story />
    </div>
)
}


ReactDOM.render( < App / > , document.getElementById('app'));
