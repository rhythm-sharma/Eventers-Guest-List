import React from 'react';
import './Persons.css'

const Persons = (props) => {

        let personNameList = props.personName.map((item, index) => {
            return (
                <div className='person'
                    key={index}
                >
                    <div className='border'>
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
                </div>
            )
        })
        
        return(
            <div className='person-list-container'>
                <div className='person-container-heading'>
                    <p className='person-text'>Select List</p>
                </div>
                {personNameList}
                <div className='guest-list'>
                <div className='person'>
                    <p  className='person-text'
                        onClick={(e) => {
                            props.ShowGusetList()
                        }}
                    >
                        Final Guest List
                    </p>
                </div>
                </div>
            </div>
        )
}

export default Persons;