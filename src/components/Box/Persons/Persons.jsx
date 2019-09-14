import React from 'react';
import './Persons.css'

const Persons = (props) => {
        let personNameList = props.personName.map((item, index) => {
            return (
                <div 
                    key={index}
                    className='person'
                    >
                    <p  className='person-text'
                        id={index}
                        onClick={(e) => props.showPersonContactDetail(e.target.id)}
                    >
                        {item + ' List'}
                    </p>
                </div>
            )
        })
        
        return(
            <div className='personlist-container'>
                {personNameList}
            </div>
        )
}

export default Persons;