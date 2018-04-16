import React from 'react';
import $ from 'jquery';

class PrimeNum extends React.Component {
  constructor(props){
    super(props)
    this.state={
      numbers=[],
      num=0
    }
    this.getNumbers=this.getNumbers.bind(this);
  }
  /*ajax to api*/
    getNumbers(){
      $.ajax({
        url:"http://174.138.36.217/numbers/",
        method: 'GET',
        success: (nums) => {
          this.setState({
            numbers: nums
          })
        },
        error: ( err) => {
        console.log('not geting numbers', err);
      }
      })
    }
    /* function to select if prime or not*/
    var primeTester = function(num) {
  if (typeof num !== 'number' || num < 1 || num % 1 !== 0) {
    return false;
  }
  if(num === 2){num
    return num+" Is Prime"
  }
  for(var i =2;i<num;i++){
    if(num%i !== 0){
      return num+" Is Prime"
    } else {
      return num+" Totally not prime"
    }
  }
}

componentDidMount(){
  this.getNumbers()
}

render {
  return(
    <div>
       <ul>
         {this.state.numbers.map(nums => <li>{this.getNumbers(nums.number)}</li>)}
       </ul></div>
  )
}
}
