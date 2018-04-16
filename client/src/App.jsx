import React from 'react';
import ReactDOM from 'react-dom';

/*COMPONENTS*/
import PrimeNum from './component/numbers/NumList.jsx'
import Humans from './component/Text.jsx'
import Story from './component/Text.jsx'

const App = () => {
  return (
    <div>
      <h1 > Hello world! </h1>
      <PrimeNum />
      <Humans />
      <Story />
    </div>
)
}


ReactDOM.render( < App / > , document.getElementById('app'));
