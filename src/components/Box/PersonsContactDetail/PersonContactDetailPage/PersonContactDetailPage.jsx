import React, { Component } from 'react';
import ContactDetail from './ContactDetail/ContactDetail';
import './PersonContactDetailPage.css';

class PersonContactDetailPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            showConfirmChangesContainer: false,
            tempStorage: [],
            totalTickSelected: 0,
        }
    }

    componentDidMount(){
        console.log(this.props.currentperosnName)
    }

    ShowConfirmChangesContainer = () => {
        this.setState({
            showConfirmChangesContainer: true
        })
    }

    CloseConfirmChangesContainer = () => {
        this.setState({
            showConfirmChangesContainer: false
        })
    }

    SaveToLocalStorage = () => {
        const tempStorage = this.state.tempStorage
        let firstKey = parseInt(this.props.currentPersonContent, 10) + 1
        console.log(firstKey);
        for(let i = 0; i < tempStorage.length; i++){
                localStorage.setItem(`${firstKey}-${localStorage.length+1}`, `${tempStorage[i][0]},${tempStorage[i][1]},${tempStorage[i][2]},${tempStorage[i][3]},${tempStorage[i][4]}` )
        }

        this.CloseConfirmChangesContainer()
        this.props.ShowGusetList();
    }

    StoreTempArray = (number, name, currentperosnName) => {
        const tempStorage = this.state.tempStorage
        // check Number exists or not
        if(tempStorage.length === 0) {
            let tempStorage = []
            tempStorage.push([name, currentperosnName, number])
            this.setState({
                tempStorage: tempStorage
            })
        }else {
            // Just change this algorithm, use localStorage to check the number is already stored in local Storage or not 
            this.setState({
                tempStorage: [...this.state.tempStorage, [name, currentperosnName, number]]
            },() => {
                for(let i = 0; i < tempStorage.length; i++) {
                    if(number === tempStorage[i][2]) {
                        alert(`The number already selcted with name: ${tempStorage[i][0]} in the ${tempStorage[i][1]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                    }else if(number === tempStorage[i][3]) {
                        alert(`The number already selcted with name: ${tempStorage[i][0]} in the ${tempStorage[i][1]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                        return true;
                    }else if(number === tempStorage[i][4]) {
                        alert(`The number already selcted with name: ${tempStorage[i][0]} in the ${tempStorage[i][1]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                    }
                    else {
                        if(name === tempStorage[i][0]){
                            tempStorage[i].push(number)
                            this.state.tempStorage.pop()
                        }
                    }
                }
                console.log(this.state.tempStorage);
            })
        }
    }

    RemoveTempArray = (number) => {
        const tempStorage = this.state.tempStorage
        
        for(let i = 0; i < tempStorage.length; i++) {
            if(number === tempStorage[i][2]) {
                this.state.tempStorage[i].splice(2,1)
            }else if(number === tempStorage[i][3]) {
                this.state.tempStorage[i].splice(3,1)
            }else if(number === tempStorage[i][4]) {
                this.state.tempStorage[i].splice(4,1)
            }
        }
    }

    TotalTickSelected = (className) => {
        if('fa fa-check-circle not-selected' === className){
            const totalTickSelected = this.state.totalTickSelected + 1
            this.setState({
                totalTickSelected: totalTickSelected
            })
        }
        
        if('fa fa-check-circle green' === className){
            const totalTickSelected = this.state.totalTickSelected - 1
            this.setState({
                totalTickSelected: totalTickSelected
            })
        }
    }

    render(){
        
        return(
            <div className='person-detail-container'>
                <div className="top-blue-box" ></div>
                { (this.state.showConfirmChangesContainer) && (this.state.totalTickSelected > 0) ? 
                    <div className='confirm-changes-container'>
                        <div className='save-btn' onClick={this.SaveToLocalStorage}>Save</div>
                        <div className='cancel-btn' onClick={ this.CloseConfirmChangesContainer}>Cancel</div>
                        <p className='confirm-changes-note'>*Note: Please press save button to update Guest list*{this.props.currentPersonContent}</p>
                    </div>
                    : null
                }
                <div className='table-header'>
                    <p className='serial-num'>SR. No.</p>
                    <p className='width-20'>Name</p>
                    <p className='width-20'>Mobile-1</p>
                    <p className='width-20'>Mobile-2</p>
                    <p className='width-20'>Mobile-3</p>
                </div>
                <hr className="new4" />
                {
                    this.props.PageDetail.slice(1).map((item, index) => {
                        return (
                            <ContactDetail 
                                key = {index}
                                srNum = {index}
                                name = {item.NAME}
                                mob1 = {item.Mobile_1}
                                mob2 = {item.Mobile_2}
                                mob3 = {item.Mobile_3}
                                ShowConfirmChangesContainer = {this.ShowConfirmChangesContainer}
                                currentperosnName = {this.props.currentperosnName}
                                StoreTempArray = {this.StoreTempArray}
                                TotalTickSelected = {this.TotalTickSelected}
                                RemoveTempArray = {this.RemoveTempArray}
                                tickActiveOrNot = {this.state.tickActiveOrNot}
                            />
                        )
                    })
                }
            </div>
            )
    }
}                
export default PersonContactDetailPage;