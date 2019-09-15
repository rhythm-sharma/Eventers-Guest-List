import React from 'react';
import PersonContactDetailPage from './PersonContactDetailPage/PersonContactDetailPage';
import './PersonsContactDetail.css';

const PersonsContactDetail = (props) => {

        let PersonContactDetailPages = props.Persons.map((item, index) => {
            return(
                <PersonContactDetailPage 
                    key={index}
                    PageDetail={item}
                    currentPersonContent = {props.currentPersonContent}
                    currentperosnName={props.currentperosnName}
                />
            )
        })

        return(
            <div className='persons-contact-detail-main-container'>
                {PersonContactDetailPages[props.currentPersonContent]}
            </div>
        )
}                
export default PersonsContactDetail;