// A reducer takes in 2 things:
// 1. the action (info about what happened)
// 2. a copy of the current state
// It then returns a copy of the updated state (store)
// after the action is applied to the current copy of state

const posts = (state = [], action) => {
    switch (action.type) {
        case 'INCREMENT_LIKES':
            const i = action.index;
            return [
                ...state.slice(0, i), // before the index to update
                {...state[i], likes: state[i].likes + 1},
                ...state.slice(i+1) // after the index to update
            ];
        default:
            return state;
    }
};

export default posts;