import React from 'react';
import './Persons.css'

const Persons = (props) => {

        let personNameList = props.personName.map((item, index) => {
            return (
                <div className='person'
                    key={index}
                >
                    <p  className='person-text'
                        id={index}
                        value = {item}
                        onClick={(e) => {
                            props.showPersonContactDetail(e.target.id, item)
                        }}
                    >
                        {item + ' List'}
                    </p>
                </div>
            )
        })
        
        return(
            <div className='person-list-container'>
                {personNameList}
            </div>
        )
}

export default Persons;