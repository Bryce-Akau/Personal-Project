import React, { Component } from 'react';

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
            email: ''
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value});
    }

    handleChangeZipCode(event){
        this.setState({
            zipCode: event.target.value
        }) 
        if(this.state.zipCode.length === 5){
            return this.state.zipCode
        } else {
            return null
        }
    }
    render(){
        return(
            <div className='line1'>
                <div className='name'>
                    <label>First Name<input value={this.state.zip} 
                    className='input' 
                    onChange={e => this.handleUserInput(e)} 
                    type='text' 
                    name='firstName' /></label>

                    <label>Last Name<input value={this.state.zip} 
                    className='input' 
                    onChange={e => this.handleUserInput(e)} 
                    type='text'
                    name='lastName' /></label>

                    <label>Middle Initial<input value={this.state.zip} 
                    className='input' 
                    onChange={e => this.handleUserInput(e)} 
                    type='text' 
                    name='middleIn' /></label>
                </div>
                <div className='line2'>
                    <label>Address<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text' 
                        name='address' 
                        placeholder='ex. 1006 Lanikuhana St. Apt A101' /></label>
                    <label>City<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text' 
                        name='city' /></label>
                    <label>State<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text'
                        name='state' /></label>
                    <label>Zip Code<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='number' 
                        name='zipCode' /></label>
                </div>
                <div className='line3'>
                    <label>Contact #<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='tel'
                        name='contactNumber' 
                        placeholder='ex.(***)***-****' /></label>
                    <label>Email<input value={this.state.zip} 
                        className='input' 
                        onChange={e => this.handleUserInput(e)} 
                        type='text' 
                        name='email' 
                        placeholder='ex. bakau808@myspace.com' /></label>
                </div>
            </div>
        )
    }
}
