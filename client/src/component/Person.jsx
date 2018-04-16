import React from 'react'
import $ from 'jquery'

class Humans extends React.Component {
  constructor(props){
    super(props)

    this.state={
      humans:[],
      first_name: "",
      last_name: "",
      birth_date: ""
    }
  }

bday(){

}
getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
      age--;
  return age;
}
