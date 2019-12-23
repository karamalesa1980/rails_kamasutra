const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'

let initialState = {
   users: [],
   per_page: 5,
   totalUsercount: 0,
   currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: 
      return {...state, users: action.users} 
    
    case SET_CURRENT_PAGE: 
      return {...state, currentPage: action.currentPage}
      
    case SET_TOTAL_USER_COUNT: 
      return {...state, totalUsercount: action.totalUsercount}  
     
    default:              // default: не забывай а то ошибка.
      return state;  
  }
}

export default usersReducer;

export const followAC = (userId) => {
  return {
    type: FOLLOW, userId
  }
}


export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW, userId
  }
}

export const setUsersAC = (users) => {
  return {
    type: SET_USERS, users
  }
}

export const setcurrentPageAC = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE, currentPage
  }
}

export const settotalUsercountAC = (totalUsercount) => {
  return {
    type: SET_TOTAL_USER_COUNT, totalUsercount
  }
}


