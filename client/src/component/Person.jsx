import React from 'react'
import $ from 'jquery'

class Humans extends React.Component {
  constructor(props){
    super(props)

    this.state={
      theHumans:[],
      first_name: "",
      last_name: "",
      birth_date: ""
    }
  }

getHumans(){
  $.ajax({
    url: "http://174.138.36.217/people/1/",
    method: "GET",
    success: (data) =>{
      this.setState({
        theHumans: data})
        console.log(data);
    }, error: ( err) =>{
      console.log('not able to get humans', err);
    }
  })
}
/*Function to select age*/
getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      age--;
  return age;
}
componentDidMount(){
  this.getHumans()
}

render(){
  return(
    <div>
    { this.state.theHumans.map(person => <li>{theHumans.first_name + " " + theHumans.last_name + "is "}</li>)}

    { this.state.theHumans.map(person => <li>{this.getAge(theHumans.birth_date) + " " + "Years Old"}</li>)}
    </div>
  )
}
}
export default Humans
