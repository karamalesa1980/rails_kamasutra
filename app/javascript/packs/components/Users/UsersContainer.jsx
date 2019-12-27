import Users from './Users';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import React, {Component} from 'react';
import axios from 'axios';
import { follow, unfollow, setUsers, setcurrentPage, settotalUsercount, ToggleIsFetching } from '../../redux/users-reducer';
 
class UsersContainer extends Component {
  
  componentDidMount(){
    this.props.ToggleIsFetching(true);
    axios.get(`/api/v1/users/index?page=${this.props.UsersReducer.currentPage}`)
    .then(response => {
      this.props.ToggleIsFetching(false);
      this.props.setUsers(response.data.data);
      this.props.settotalUsercount(response.data.totalUsercount);
      
    });
     debugger
  }


  // componentDidMount() {
  //     const url = "/api/v1/recipes/index";
  //     fetch(url)
  //       .then(response => {
  //         if (response.ok) {
  //           return response.json();
  //         }
  //         throw new Error("Network response was not ok.");
  //       })
  //       .then(response => this.setState({ recipes: response }))
  //       .catch(() => this.props.history.push("/"));
  // }

  onPageChenged = (pageNumber) => {
    this.props.setcurrentPage(pageNumber)
    this.props.ToggleIsFetching(true);
    axios.get(`/api/v1/users/index?page=${pageNumber}`)
    .then(res => {
      this.props.ToggleIsFetching(false);
      this.props.setUsers(res.data.data);
    })
     
    
  }
  
  render() {
    
    return <>
      {this.props.UsersReducer.isFetching ? <img src='loader.gif' alt=''/> : null }
      <Users {...this.props} onPageChenged={this.onPageChenged}/>
    </>
    
  }
}

let mapStateToProps = (state) => {
  return {
    UsersReducer: state.usersReducer
  }
}
// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setcurrentPage: (currentPage) => {
//       dispatch(setcurrentPageAC(currentPage));
//     },
//     settotalUsercount: (totalUsercount) => {
//       dispatch(settotalUsercountAC(totalUsercount));
//     },
//     ToggleIsFetching: (isFetching) => {
//       dispatch(ToggleIsFetchingAC(isFetching));
//     },
//   }
// }


export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setcurrentPage, settotalUsercount, ToggleIsFetching,
})(UsersContainer);

