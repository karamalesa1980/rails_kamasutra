import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import axios from 'axios';
import {setAuthUserData} from '../../redux/auth-reducer';
import { withRouter } from 'react-router';


class HeaderContainer extends Component {
  
  
   componentDidMount() {
    
   
    
     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
       withCredentials: true 
      //  запрос cookes
     }) 
     .then(res => {
       if(res.data.resultCode === 0) {
         debugger
         let {id, email, login} = res.data.data;
         this.props.setAuthUserData(id, email, login);
       }
     })
    
   }

  render() {
    
    return <Header {...this.props}/>
         
        
      
      
    
    
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login 
  }
}
//export default HeaderContainer;
//let withUrlDataCntainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

