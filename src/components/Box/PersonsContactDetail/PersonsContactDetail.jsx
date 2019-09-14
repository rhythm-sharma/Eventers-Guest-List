import React from 'react';
import ContactDetail from './ContactDetail/ContactDetail';
import './PersonsContactDetail.css';

const PersonsContactDetail = (props) => {

        const print = () => {
            console.log(props.currentPersonContent)
        }

        print();
        
        return(
            <div className='file-detail-container'>
                <div className='table-header'>
                    <p className='name'>Name</p>
                    <p className='mob-1'>Mobile-1</p>
                    <p className='mob-2'>Mobile-2</p>
                    <p className='mob-3'>Mobile-3</p>
                    <p className='select'>select</p>
                </div>
                {
                    props.currentPersonContent.map((item, index) => {
                        return (
                            <ContactDetail 
                                key = {index}
                                name = {item.NAME}
                                mob1 = {item.Mobile_1}
                                mob2 = {item.Mobile_2}
                                mob3 = {item.Mobile_3}
                            />
                        )
                    })
                }      
            </div>
        )
}

export default PersonsContactDetail;