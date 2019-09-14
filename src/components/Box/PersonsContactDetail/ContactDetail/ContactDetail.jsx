import React from 'react';
import SelectContact from './SelectContact/SelectContact'
import './ContactDetail.css';

const PersonsContactDetail = (props) => {

        return(
            <div className='contact-detail'>
                <p className='contact-name'>{props.name}</p>
                <p className='contact-mob-1'>{props.mob1}</p>
                <p className='contact-mob-2'>{props.mob2}</p>
                <p className='contact-mob-3'>{props.mob3}</p>
                <SelectContact />
            </div>
        )
}

export default PersonsContactDetail;