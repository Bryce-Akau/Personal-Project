import React, { Component } from 'react';
// import Product from './Product';
import '../css/order.css';
import axios from 'axios'

export default class Order extends Component {
    constructor(){
        super()
        this.state = {
            lastName: '',
            firstName: '',
            middleIn: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
            phoneNumber: '',
            email: '',
            size: '',
            track: '',
            trackColor: '',
            aussieLine: '',
            reelColor: '',
            reelSize: '',
            handleColor: '',
            validZip: false,
            validTel: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'zipCode' && value.length === 5){
            this.setState({
                validZip: true
            })
        } else if (name === 'zipCode' && value.length !== 5){
            this.setState({
                validZip: false 
            })
        } else if (name === 'contactNumber' && value.length === 10){
            this.setState({
                validTel: true
            })
        } else if (name === 'contactNumber' && value.length !== 10){
            this.setState({
                validTel: false
            })
        }
        this.setState({[name]: value});
    }

    submitOrder(){
        axios.post('/api/createorder', this.state).then(res => {
            console.log(res)
        })
    }

    render(){
        return(
            <div className='personal'>
                <div className="inputForm">
                    <h2>Order Form</h2>
                </div>
                <div className='lines'>
                <div className='line one'>
                    <div>
                        <label className="fn">First Name:</label>
                        <input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text' 
                        name='firstName'
                        id='firstName'
                        />
                    </div>
                    <div>
                        <label className="fn">Last Name:</label>
                        <input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text'
                        name='lastName' />
                    </div>
                    <div>
                        <label className="fn">Middle Initial:</label>
                        <input value={this.state.zip} 
                        className='midIn' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text'
                        maxLength='1' 
                        name='middleIn' />
                    </div>
                </div>

                <div className='line two'>
                    <div>
                        <label className="fn">Address:</label>
                        <input value={this.state.zip} 
                            className='addy' 
                            onChange={e => this.handleUserInput(e)} 
                            type='text' 
                            name='address' />
                    </div>
                    <div>
                        <label className="fn">City:</label>
                        <input value={this.state.zip} 
                            className='city' 
                            onChange={e => this.handleUserInput(e)} 
                            type='text' 
                            name='city' />
                    </div>
                    <div>
                        <label className="fn">State:</label>
                        <input value={this.state.zip} 
                            className='state' 
                            onChange={e => this.handleUserInput(e)} 
                            type='text'
                            maxLength='2'
                            name='state' style={{width: '50px'}} />
                    </div>
                    <div>
                        <label className="fn">Zip Code:</label>
                        <input value={this.state.zip} 
                            className='zip' 
                            onChange={e => this.handleUserInput(e)} 
                            type='tel'
                            maxLength="5" 
                            name='zipCode' style={{width: '50px'}} />
                        {/* {this.state.validZip ? <span>Zip code verified</span> : <span>Zip not verified</span>} */}
                    </div>
                </div>

                <div className='line three'>
                    <div>
                        <label className="fn">Contact #</label>
                        <input
                            className='tel' 
                            onChange={e => this.handleUserInput(e)} 
                            type='tel'
                            maxLength="10"
                            name='contactNumber' 
                            placeholder='ex.(***)***-****' />                            
                         {/* {this.state.validTel ? <span>Telephone verified</span> : <span>not verified</span>} */}
                    </div>
                    <div>
                        <label className="fn">Email:</label>
                        <input value={this.state.zip} 
                            className='input' 
                            onChange={e => this.handleUserInput(e)} 
                            type='text' 
                            name='email' 
                            placeholder='ex. bakau808@myspace.com' />
                    </div>
                    
                </div>
                <div className="line one">
                    <div>
                        <label className="fn">Size:</label>
                        <input 
                        className="productValue"
                        type="text"
                        name="size"
                        placeholder="80cm"/>
                    </div>
                    <div>
                        <label className="fn">Track:</label>
                        <input list="browsers" name="browser" />
                            <datalist id="browsers">
                            <option value="Enclosed Track"></option>
                            <option value="Open Track"></option>
                            <option value="Deep-Open Track"></option>
                            </datalist>
                    </div>
                    <div>
                        <label className="fn">Track Color:</label>
                        <input list="browsers1" name="browser1" />
                            <datalist id="browsers1">
                            <option value="Purple Pearl"></option>
                            <option value="Sky Blue"></option>
                            <option value="Red Pearl"></option>
                            <option value="Galaxy Blue"></option>
                            </datalist>
                    </div>
                </div>
                <div className="line two">
                    <div>
                        <label className="fn">Aussie Line:</label>
                        <input list="browsers2" name="browser2" />
                            <datalist id="browsers2">
                            <option value="Braid Line"></option>
                            <option value="Pro Line"></option>
                            </datalist>
                    </div>
                    <div>    
                        <label className="fn">Reel Color:</label>
                        <input list="browsers3" name="browser3" />
                            <datalist id="browsers3">
                            <option value="Red"></option>
                            <option value="White"></option>
                            <option value="Blue"></option>
                            <option value="Green"></option>
                            <option value="Black"></option>
                            <option value="Pink"></option>
                            <option value="Yellow"></option>
                            <option value="Orange"></option>
                            <option value="Purple"></option>
                            </datalist>
                    </div>
                    <div>
                        <label className="fn">Reel Size:</label>
                        <input list="browsers4" name="browser" />
                            <datalist id="browsers4">
                            <option value="50mm"></option>
                            <option value="100mm"></option>
                            </datalist>
                    </div>
                </div>
                <div className="line three">
                    <div>
                        <label className="fn">Handle Color:</label>
                        <input list="browsers3" name="browser3" />
                            <datalist id="browsers3">
                            </datalist>
                    </div>
                </div>
                </div>
                {/* <Product /> */}
                <button type='button' onClick={() => this.submitOrder()}>Submit</button>
            </div>
        )
    }
}
