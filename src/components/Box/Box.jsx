import React, { Component } from 'react';
import {Persons} from '../Assets/RawData.js';
import Person from './Persons/Persons'
import PersonsContactDetail from './PersonsContactDetail/PersonsContactDetail'
import './Box.css';

class Box extends Component {

  state = {
    personName: [],
    personContent: [],
    currentPersonContent: []
  }

  componentDidMount(){

    let personName = [];

    personName = Persons.map((item) => {
      return item[0].personName
    })
    
    this.setState({
      personContent: Persons,
      personName: personName
    })

  }

  showPersonContactDetail = (currentIndex) => {
    console.log('click', currentIndex)

    let currentPersonContent = this.state.personContent[currentIndex]

    currentPersonContent.shift()

    this.setState({
      currentPersonContent: currentPersonContent
    })
  }

  
  render(){
    const {personName, currentPersonContent} = this.state
    return (
      <div className='box-container'>
        <Person
          personName = {personName}
          showPersonContactDetail = {this.showPersonContactDetail}
        />
        <PersonsContactDetail
          currentPersonContent = {currentPersonContent}
        />
      </div>
    )
  }

}

export default Box;
