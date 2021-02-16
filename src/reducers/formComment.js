export default function formCommentReducer(state = {replies: []}, action) {
    switch (action.type) {
      case "push_reply":
        let temp = state.replies
        console.log(temp)
        if (temp.filter(r => r.id === action.payload.id).length < 1)
          temp.push({id: action.payload.id, cross: false})
        return {...state, replies: temp}
      case "remove_reply":
        return {...state, replies: state.replies.filter(r => r.id != action.payload.id)}
      case "switch_cross":
        let tmp = state.replies
        console.log(action.payload)
        tmp = tmp.map(r => r.id == action.payload.id ? {...r, cross: !r.cross} : r)
        return {...state, replies: tmp}
      case undefined: 
        return {replies: []}
      default:
        return state
    }
  }