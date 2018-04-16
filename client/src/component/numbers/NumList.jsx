import React from 'react';
import $ from 'jquery';

class PrimeNum extends React.Component {
  constructor(props){
    super(props)

    this.state={
      numbers: [],
      number: 0
    }

  }
  /*ajax to api*/
  getNumbers(){
    $.ajax({
     url: 'http://174.138.36.217/numbers/',
     method: 'GET',
     success: (data) => {
       this.setState({
         numbers: data});
         console.log(data);
     },
     error: ( xhr, err ) => {
       console.log('err', err);
     }
    })
  }
/* function to select if prime or not*/
primeTester(n) {
  for(var i =2; i<n;i++)
  if(n % i === 0) return n + " Totally not prime";
  return n + " Is Prime";
}

componentDidMount(){
  this.getNumbers()
}

render() {
  return(
    <div>
    <ul>
    { this.state.numbers.map(digitos => <li>{this.primeTester(digitos.number)}</li>)}
    </ul>
    </div>
    )
  }
}
export default PrimeNum;
