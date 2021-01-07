//login reducer

export default function user(state = {name: ""}, action) {
    switch (action.type) {
      case 'login':
        return {state, name: action.payload}
      default:
        return state
    }
  }