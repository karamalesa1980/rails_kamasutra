import React, {Component} from 'react';
import classes from './Users.module.css';
import axios from 'axios';
import {Pagination} from 'semantic-ui-react';


class Users extends Component {
  // constructor(props) {
  //   super(props);
  //   axios.get('/users_json.json')
  //    .then(res => {
  //      this.props.setUsers(res.data.data)
  //    });
  // }
  componentDidMount(){
    axios.get(`/users_json?page=${this.props.UsersReducer.currentPage}`)
    .then(res => {
      this.props.setUsers(res.data.data);
      this.props.settotalUsercount(res.data.totalUsercount);
    });
     
  }

  onPageChenged = (pageNumber) => {
    this.props.setcurrentPage(pageNumber)
    axios.get(`/users_json?page=${pageNumber}`)
    .then(res => {this.props.setUsers(res.data.data)})
     
    
  }
  

  render() {
    
    let pagescount = (this.props.UsersReducer.totalUsercount)
      // * this.props.UsersReducer.per_page
      

    let pages = [];

    for (let i=1; i <= pagescount; i++) {
      pages.push(i);
    }

    return <div className={classes.users}>
      <div>
        
          {pages.map(p => {
            
            return <span className={this.props.UsersReducer.currentPage === p && classes.selectedPage}
            onClick={(e) => {this.onPageChenged(p); }}> {p} </span> 
          })}
        
      </div>
      {
        this.props.UsersReducer.users.map( u => <div key={u.id} >
          
          <span>
            <div>
              <img src={u.avatarUrl}/>
            </div>
            <div>
               {u.followed
              ? <button onClick={() => {this.props.unfollow(u.id)} }>Unfollow</button>
              :<button onClick={() => {this.props.follow(u.id)} }>Follow</button>} 
              
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.country} </div>
              <div>{u.city}</div>
            </span>
          </span>
          <hr/>
        </div>)
      }
       {/* <Pagination onPageChange={this.onPageChenged(p)} size='mini' siblingRange="6"
      defaultActivePage={this.props.UsersReducer.currentPage}
      totalPages={this.props.UsersReducer.totalUsercount}/>  */}
    </div>
    
  }
}


   
export default Users;