//login reducer

export default function userReducer(state = {name: ""}, action) {
    switch (action.type) {
      case 'login':
        return {...state, name: action.payload}
      case 'logout':
        return  {name: ""}
      case undefined: 
        return {name: ""}
      default:
        return state
    }
  }