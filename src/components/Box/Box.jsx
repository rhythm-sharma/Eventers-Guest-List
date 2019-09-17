import React, { Component } from 'react';
import {Persons} from '../Assets/RawData.js';
import Person from './Persons/Persons'
import PersonsContactDetail from './PersonsContactDetail/PersonsContactDetail'
import './Box.css';

class Box extends Component {

  state = {
    personName: [],
    personContent: [],
    currentPersonContent: [],
    currentperosnName: '',
    showGusetList: false,
  }

  componentDidMount(){

    let personName = [];

    personName = Persons.map((item) => {
      return item[0].personName
    })
    
    this.setState({
      personContent: Persons,
      personName: personName,
      numberOfList: personName.length
    })

  }

  showPersonContactDetail = (currentIndex, currentperosnName) => {
    this.setState({
      showGusetList: false,
      currentPersonContent: currentIndex,
      currentperosnName: currentperosnName
    })
  }

  ShowGusetList = () => {
    this.setState({
      showGusetList: true
    })
  }
  
  render(){
    const {personName, currentPersonContent, currentperosnName, numberOfList} = this.state
    return (
      <div className='box-container'>
        <Person
          personName = {personName}
          showPersonContactDetail = {this.showPersonContactDetail}
          currentPersonContent = {currentPersonContent}
          ShowGusetList = {this.ShowGusetList}
        />
        <PersonsContactDetail
          currentPersonContent = {currentPersonContent}
          Persons = {Persons}
          currentperosnName = {currentperosnName}
          showGusetList = {this.state.showGusetList}
          ShowGusetList = {this.ShowGusetList}
          numberOfList = {numberOfList}
        />
      </div>
    )
  }

}

export default Box;
