const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
   users: [],
   per_page: 5,
   totalUsercount: 0,
   currentPage: 1,
   isFetching: false,
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
      
    case TOGGLE_IS_FETCHING: 
      return {...state, isFetching: action.isFetching}
     
    default:              // default: не забывай а то ошибка.
      return state;  
  }
}

export default usersReducer;

export const follow = (userId) => {
  return {
    type: FOLLOW, userId
  }
}


export const unfollow = (userId) => {
  return {
    type: UNFOLLOW, userId
  }
}

export const setUsers = (users) => {
  return {
    type: SET_USERS, users
  }
}

export const setcurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE, currentPage
  }
}

export const settotalUsercount = (totalUsercount) => {
  return {
    type: SET_TOTAL_USER_COUNT, totalUsercount
  }
}

export const ToggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING, isFetching
  }
}


