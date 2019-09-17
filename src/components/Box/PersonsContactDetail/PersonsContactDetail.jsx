import React, { Component } from 'react';
import PersonContactDetailPage from './PersonContactDetailPage/PersonContactDetailPage';
import './PersonsContactDetail.css';

class PersonsContactDetail extends Component {

        constructor(props){
            super(props);
            this.state = {
                localStorageArray: []
            }
        }

        componentDidMount(){
            this.DisplayGuestList();
        }

        componentDidUpdate(prevProps) {
            // it updates if Guest list data is modified
            if (prevProps.showGusetList !== this.props.showGusetList) {
                this.DisplayGuestList();
            }
          }
          
        
        DisplayGuestList = () => {
            let localStorageArray = [];
            if(localStorage.length === 0){
                return true;
            }else{

                for(let i = 0; i < this.props.Persons[0].length; i++){
                    if(localStorage.getItem(`1-${i+1}`)){
                        localStorageArray.push(localStorage.getItem(`1-${i+1}`).split(','))
                    }
                }
                
                for(let i = 0; i < this.props.Persons[1].length; i++){
                    if(localStorage.getItem(`2-${i+1}`)){
                        localStorageArray.push(localStorage.getItem(`2-${i+1}`).split(','))
                    }
                }

                for(let i = 0; i < this.props.Persons[2].length; i++){
                    if(localStorage.getItem(`3-${i+1}`)){
                        localStorageArray.push(localStorage.getItem(`3-${i+1}`).split(','))
                    }
                }

                this.setState({
                    localStorageArray: localStorageArray
                })
            }
        }
            
        render() {
            let PersonContactDetailPages = this.props.Persons.map((item, index) => {
                return(
                    <PersonContactDetailPage
                        key={index}
                        PageDetail={item}
                        currentPersonContent = {this.props.currentPersonContent}
                        currentperosnName={this.props.currentperosnName}
                        ShowGusetList = {this.props.ShowGusetList}
                        numberOfList = {this.props.numberOfList}
                    />
                )
            })

            if(this.props.showGusetList){
                return(
                    <div className='persons-contact-detail-main-container'>
                        <div className='person-detail-container'>
                            <div className="top-blue-box" ></div>
                            <div className='table-header'>
                                <p className='serial-num'>SR. No.</p>
                                <p className='width-20'>Name</p>
                                <p className='width-20'>Mobile-1</p>
                                <p className='width-20'>Mobile-2</p>
                                <p className='width-20'>Mobile-3</p>
                            </div>
                            <hr className="new4" />
                            {
                                this.state.localStorageArray.map((item, index) => {
                                    return (
                                        <div key={index} className='contact-detail'>
                                            <p className='serial-num'>{index + 1}</p>
                                            <p className='contact-name'>{item[2]}</p>
                                            <div className='contact-mob-container'>
                                                <div className='contact-mob-1'>
                                                {(item[3] === 'undefined') ?
                                                    <p>----</p>
                                                    :<p>{item[3]}</p>
                                                }
                                                </div>
                                            </div>
                                            <div className='contact-mob-container'>
                                                <div className='contact-mob-2'>
                                                {(item[4] === 'undefined') ?
                                                    <p>----</p>
                                                    :<p>{item[4]}</p>
                                                }
                                                </div>
                                            </div>
                                            <div className='contact-mob-container'>
                                                <div className='contact-mob-3'>
                                                {(item[5] === 'undefined') ?
                                                    <p>----</p>
                                                    :<p>{item[5]}</p>
                                                }
                                                </div>
                                            </div>
                                        </div>
                                        )
                                    })
                            }
                        </div>
                    </div>
                )
            }else {
                return(
                    <div className='persons-contact-detail-main-container'>
                        {PersonContactDetailPages[this.props.currentPersonContent]}
                    </div>
                )
            }
        }
}                
export default PersonsContactDetail;