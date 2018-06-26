import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { loginUser, logoutUser } from '../ducks/reducer';
import '../css/profile.css';
import axios from 'axios';

class Profile extends Component {

    componentDidMount(){
        console.log('props', this.props)
        const {loginUser}= this.props;
        axios.get('/api/user').then(response => {
            if (response.data.name){
                loginUser(response.data)
            }}).catch(() =>{
            this.props.history.push('/')
        })
    }

    logout() {
        const { logoutUser } = this.props;
        axios.post('/api/logout').then(response => {
          logoutUser();
        }).catch(() => {
            this.props.history.push('/')
        })
      }
      
    render(){
       const {user} = this.props;
        console.log('user', user)
       return (
           <div className="logbut">
               {user && <div>
                   <img src={user.picture} className="userPic" alt="its you"/>
                   <h1>{user.name}</h1>
                   <button onClick={() => this.logout()} className="logOutButton">Log out</button>
                   {/* <button onclick={</Order>} className='orderForm'>Order</button> */}
                </div>}
           </div>
       )
   }
}

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  loginUser,
  logoutUser,
};

export default withRouter (connect(mapStateToProps, mapDispatchToProps)(Profile));