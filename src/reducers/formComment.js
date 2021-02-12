export default function formCommentReducer(state = {replies: []}, action) {
    switch (action.type) {
      case "push_reply":
        let temp = state.replies
        temp.push(action.payload)
        return {...state, replies: temp}
      case "remove_reply":
        return {...state, replies: state.replies.filter(r => r.id != action.payload.id)}
      case undefined: 
        return {replies: []}
      default:
        return state
    }
  }