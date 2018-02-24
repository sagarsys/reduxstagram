// A reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of the current state
// It then returns a copy of the updated state (store)
// after the action is applied to the current copy of state

function posts(state = [], action) {
    console.log(state, action);
    return state;
}

export default posts;