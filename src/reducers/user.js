//login reducer

export default function userReducer(state = {name: ""}, action) {
    switch (action.type) {
      case 'login':
        /*
        console.log("login")
        console.log(action)
        console.log({...state, name: action.payload})*/
        return {...state, name: action.payload}
      case 'logout':
        return  {name: ""}
      case undefined: 
        return {name: ""}
      default:
        return state
    }
  }