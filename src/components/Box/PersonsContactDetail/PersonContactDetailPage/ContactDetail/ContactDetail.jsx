import React, { Component } from 'react';
import SelectUnselect from './SelectUnselect/SelectUnselect';
import './ContactDetail.css';

class ContactDetail extends Component {

    constructor(props){
        super(props);
        this.state = {
        }
    }

    

    render(){

        return(
            <div className='contact-detail'>
                <p className='serial-num'>{this.props.srNum + 1}</p>
                <p className='contact-name'>{this.props.name}</p>
                <div className='contact-mob-container'>
                { (this.props.mob1 == null) ?
                   <p className='grey'>null</p> :
                   <div className='contact-mob-1'>
                       <p>{this.props.mob1}</p>
                       <SelectUnselect
                            srNum = {this.props.srNum + 1}
                            ShowConfirmChangesContainer = {this.props.ShowConfirmChangesContainer}
                            currentperosnName = {this.props.currentperosnName}
                            name = {this.props.name}
                            number = {this.props.mob1}
                            StoreTempArray = {this.props.StoreTempArray}
                            TotalTickSelected = {this.props.TotalTickSelected}
                            RemoveTempArray = {this.RemoveTempArray}
                       />
                   </div>
                }
                </div>
                <div className='contact-mob-container'>
                { (this.props.mob2 == null) ?
                   <p className='grey'>null</p> :
                   <div className='contact-mob-2'>
                       <p>{this.props.mob2}</p>
                       <SelectUnselect
                            srNum = {this.props.srNum + 1}
                            ShowConfirmChangesContainer = {this.props.ShowConfirmChangesContainer}
                            currentperosnName = {this.props.currentperosnName}
                            name = {this.props.name}
                            number = {this.props.mob2}
                            StoreTempArray = {this.props.StoreTempArray}
                            TotalTickSelected = {this.props.TotalTickSelected}
                            RemoveTempArray = {this.RemoveTempArray}
                       />
                   </div>
                }
                </div>
                <div className='contact-mob-container'>
                { (this.props.mob3 == null) ?
                   <p className='grey'>null</p> :
                   <div className='contact-mob-3'>
                       <p>{this.props.mob3}</p>
                       <SelectUnselect
                            srNum = {this.props.srNum + 1}
                            ShowConfirmChangesContainer = {this.props.ShowConfirmChangesContainer}
                            currentperosnName = {this.props.currentperosnName}
                            name = {this.props.name}
                            number = {this.props.mob3}
                            StoreTempArray = {this.props.StoreTempArray}
                            TotalTickSelected = {this.props.TotalTickSelected}
                            RemoveTempArray = {this.RemoveTempArray}
                       />
                   </div>
                }
                </div>
            </div>
        )
    }
}

export default ContactDetail;