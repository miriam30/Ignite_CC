import React from 'react'
import $ from 'jquery'

class Story extends React.Component {
  constructor(props){
    super(props)

    this.state={
      string: [],
      title: '',
      text:''
    }
    this.getString = this.getString.bind(this)
  }
  /*ajax to api*/
  getString(){
    $.ajax({
     url: 'http://174.138.36.217/texts/1/',
     method: 'GET',
     success: (data) => {
       this.setState({
         string: data});
         console.log(data);
     },
     error: ( xhr, err ) => {
       console.log('err in getting string', err);
     }
    })
  }
  render(){
    return(
      <div>
      <ul>
      {this.state.string.map(txt => <li>{this.string.title.charAt(0).toUpperCase() + this.string.title.slice(1)}</li>)}

      {this.state.string.map(txt => <li>{this.string.text.replace(/([!?.]\s+)([a-z])/g, function(m, $1, $2) {return $1+$2.toUpperCase()})}</li>)}
      </ul>
      </div>
    )
  }
}
export default Story
