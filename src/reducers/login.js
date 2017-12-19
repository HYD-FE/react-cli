export default (state = {logined: false}, action) => {
  switch (action.type) {
    case 'LOGINED':
      state.logined = true
      return state
    default:
      return state
  }
}
