import React from 'react';
import classes from './Users.module.css';
import { NavLink } from 'react-router-dom';
import {Pagination} from 'semantic-ui-react';


let Users = (props) => {

    let pagescount = (props.UsersReducer.totalUsercount)
      
    let pages = [];

    for (let i=1; i <= pagescount; i++) {
      pages.push(i);
    }

    return <div className={classes.users}>
      <div className={classes.Pagination}>
        
          {pages.map(p => {            
            return <button className={props.UsersReducer.currentPage === p && classes.selectedPage}
            onClick={(e) => {props.onPageChenged(p); }}> {p} </button> 
          })}
        
      </div>
      {props.UsersReducer.users.map( u => <div key={u.id} >
          
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
              <img src={u.avatarUrl}/>
              </NavLink>
            </div>
            <div>
               {u.followed
              ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
              :<button onClick={() => {props.follow(u.id)} }>Follow</button>} 
              
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



   
export default Users;