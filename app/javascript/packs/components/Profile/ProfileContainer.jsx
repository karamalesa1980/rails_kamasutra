import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import axios from 'axios';
import {setProfile} from '../../redux/profile-reducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import { withRouter } from 'react-router';


class ProfileContainer extends Component {
  
  
  componentDidMount() {
    
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 1;
    }
    
    axios.get(`/api/v1/show/` + userId) 
    .then(res => this.props.setProfile(res.data))
    
  }

  render() {
    
    return <>
        
        <ProfileInfo profile={this.props.ProfileReducer.profile}/>
        <MyPostsContainer />
      </>
      
    
    
  }
}

let mapStateToProps = (state) => {
  return {
    ProfileReducer: state.profileReducer
  }
}

let withUrlDataCntainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile})(withUrlDataCntainerComponent);

