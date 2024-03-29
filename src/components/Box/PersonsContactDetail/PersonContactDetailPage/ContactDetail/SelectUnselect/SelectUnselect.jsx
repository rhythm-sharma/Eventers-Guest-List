import React, { Component } from 'react'
import './SelectUnselect.css' 

class SelectUnselect extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            tickActive: false,
            tempStorage: []
        }
    }

    toggleTickClass = (currentperosnName, name, number, className, tickActive, srNum, currentPersonContent, columnNum) => {
        const currentState = this.state.tickActive;
        this.setState({ tickActive: !currentState });
        this.props.TotalTickSelected(className, currentPersonContent);
        if(tickActive === false){
            this.props.StoreTempArray( srNum, currentperosnName, name, number, columnNum)
        }
        if(tickActive === true){
            this.props.RemoveTempArray(number)
        }
    };
    
    render(){
        return(
            <div className='tick-btn'>
                <i
                    id={this.props.srNum}
                    value={this.props.keyValue}
                    onClick={(e) => {
                        this.toggleTickClass(this.props.currentperosnName, this.props.name, this.props.number, e.target.className, this.state.tickActive, this.props.srNum, this.props.currentPersonContent, this.props.columnNum)
                        this.props.ShowConfirmChangesContainer()
                    }}
                    className={this.state.tickActive ? 'fa fa-check-circle green': 'fa fa-check-circle not-selected'} aria-hidden="true"></i>
            </div>
        )
    }
}

export default SelectUnselect;