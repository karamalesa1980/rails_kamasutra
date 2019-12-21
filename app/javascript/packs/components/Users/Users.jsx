import React, {Component} from 'react';
import classes from './Users.module.css';
import axios from 'axios';


class Users extends Component {
  // constructor(props) {
  //   super(props);
  //   axios.get('/users_json.json')
  //    .then(res => {
  //      this.props.setUsers(res.data.data)
  //    });
  // }
  componentDidMount(){
    axios.get('/users_json.json')
    .then(res => {this.props.setUsers(res.data.data)});
  }


  render() {
    
    return <div className={classes.users}>
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
        </div>)
      }
    </div>
  }
}
  // debugger
  // if (props.UsersReducer.users.length === 0) {
  //   axios.get('/users_json.json')
  //   .then(res => {
  //     props.setUsers(res.data.data)
  //   });

    // axios.get('/users.json')
    // .then(data => {
    //   // debugger
    //   let res = []
    //   data.data.data.map( (data) => {
    //     res.push({id: data.id, title: data.title, desription: data.desription, active: false})
    //     this.setState({course_modules: res})
    //   })
    // })
       

  // debugger
//   return <div className={classes.users}>
//       {
//         props.UsersReducer.users.map( u => <div key={u.id} >
          
//           <span>
//             <div>
//               <img src={u.avatarUrl}/>
//             </div>
//             <div>
//               {/* {u.followed
//               ? <button onClick={() => {props.unfollow(u.id)} }>Unfollow</button>
//               :<button onClick={() => {props.follow(u.id)} }>Follow</button>} */}
              
//             </div>
//           </span>
//           <span>
//             <span>
//               <div>{u.fullname}</div>
//               <div>{u.status}</div>
//             </span>
//             <span>
//               <div>{u.country} </div>
//               <div>{u.city}</div>
//             </span>
//           </span>
//         </div>)
//       }
//     </div>          
// }
   


export default Users;