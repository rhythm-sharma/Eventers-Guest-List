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
            currentSrNum: null
        }
    }

    // componentDidMount(){
    //     console.log(this.props.currentperosnName)
    // }

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
        for(let i = 0; i < tempStorage.length; i++){
            localStorage.setItem(`${firstKey}-${tempStorage[i][0]}`, `${tempStorage[i][0]},${tempStorage[i][1]},${tempStorage[i][2]},${tempStorage[i][3]},${tempStorage[i][4]},${tempStorage[i][5]}` )
        }

        this.CloseConfirmChangesContainer()
        this.props.ShowGusetList();
    }

    StoreTempArray = (srNum, currentperosnName, name, number, columnNum) => {
        const tempStorage = this.state.tempStorage
        const currentTempStorage = [srNum, currentperosnName, name]
        // currentTempStorage.push(number)
        currentTempStorage[columnNum] = number
        this.setState({
            tempStorage: [...this.state.tempStorage, currentTempStorage]
        },() => {

            let numberExistInLocalStorage = false;
            
            // checking number exist in LoacalStorage or not
            // this.NumberExistInLocalStorage(number, numberExistInLocalStorage)
            // let numberOfList = this.props.numberOfList
            // let currentlocalStorageEl = []
            // for(let j = 0; j < numberOfList; j++) {
            //     for(let i = 0; i < localStorage.length; i++) {
            //         if(localStorage.getItem(`${j+1}-${i+1}`) !== null) {
            //             console.log(localStorage.getItem(`${j+1}-${i+1}`))
            //             currentlocalStorageEl.push(localStorage.getItem(`${j+1}-${i+1}`).split(','))
            //             console.log('currentlocalStorageEl: ', currentlocalStorageEl);
            //             console.log(i);         
            //             if(number === parseInt(currentlocalStorageEl[i][3], 10)) {
            //                 alert(`The number ${currentlocalStorageEl[i][3]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
            //                 this.state.tempStorage.pop();
            //                 numberExistInLocalStorage = true
            //             }else if(number === parseInt(currentlocalStorageEl[i][4], 10)) {
            //                 alert(`The number ${currentlocalStorageEl[i][4]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
            //                 this.state.tempStorage.pop();
            //                 numberExistInLocalStorage = true
            //             }else if(number === parseInt(currentlocalStorageEl[i][5], 10)) {
            //                 alert(`The number ${currentlocalStorageEl[i][5]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
            //                 this.state.tempStorage.pop();
            //                 numberExistInLocalStorage = true
            //             }else {
            //                 numberExistInLocalStorage = false;
            //             }
            //         }
            //     }
            // }
            
            let currentlocalStorageEl = []
            for (let i = 0; i < localStorage.length; i++) {  
                let key = localStorage.key(i);
                currentlocalStorageEl.push(localStorage.getItem(key).split(','))
            }  

            for(let i = 0; i < currentlocalStorageEl.length; i++) {
                if(number === parseInt(currentlocalStorageEl[i][3], 10)) {
                    alert(`loacalStorage The number ${currentlocalStorageEl[i][3]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
                    this.state.tempStorage.pop();
                    numberExistInLocalStorage = true
                }else if(number === parseInt(currentlocalStorageEl[i][4], 10)) {
                    alert(`loacalStorage The number ${currentlocalStorageEl[i][4]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
                    this.state.tempStorage.pop();
                    numberExistInLocalStorage = true
                }else if(number === parseInt(currentlocalStorageEl[i][5], 10)) {
                    alert(`loacalStorage The number ${currentlocalStorageEl[i][5]} already selcted with name: ${currentlocalStorageEl[i][2]} in the ${currentlocalStorageEl[i][1]}'s list Please Unselect the current number`);
                    this.state.tempStorage.pop();
                    numberExistInLocalStorage = true
                }else {
                    numberExistInLocalStorage = false;
                }
            }

            // checking number exist in tempStorage(before saving tempArray to localStorage) or not
            if(numberExistInLocalStorage === false) {
                for(let i = 0; i < tempStorage.length; i++) {
                    if(number === tempStorage[i][3]) {
                        alert(`The number already selcted with name: ${tempStorage[i][3]} in the ${tempStorage[i][2]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                    }else if(number === tempStorage[i][4]) {
                        alert(`The number already selcted with name: ${tempStorage[i][4]} in the ${tempStorage[i][2]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                        return true;
                    }else if(number === tempStorage[i][5]) {
                        alert(`The number already selcted with name: ${tempStorage[i][5]} in the ${tempStorage[i][2]}'s list Please Unselect the current number`);
                        this.state.tempStorage.pop();
                    }
                    else {
                        if(name === tempStorage[i][2]){
                            tempStorage[i].push(number)
                            this.state.tempStorage.pop()
                        }
                    }
                }
            }
        })
    }

    RemoveTempArray = (number) => {
        const tempStorage = this.state.tempStorage
        
        for(let i = 0; i < tempStorage.length; i++) {
            if(number === tempStorage[i][3]) {
                this.state.tempStorage[i].splice(2,1)
            }else if(number === tempStorage[i][4]) {
                this.state.tempStorage[i].splice(3,1)
            }else if(number === tempStorage[i][5]) {
                this.state.tempStorage[i].splice(4,1)
            }
        }
    }

    TotalTickSelected = (className, currentPersonContent) => {
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
                                currentPersonContent = {this.props.currentPersonContent}
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