const postComment = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'ADD_COMMENT':
            // return updated state with new comment
            return [...state, {
                user: action.author,
                text: action.comment
            }];
        case 'REMOVE_COMMENT':
            // return updated state with deleted comment 
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
};

const comments = (state = [], action) => {
    if (typeof action.postId !== 'undefined') {
        return {
            // take the current state
            ...state,
            // overwrite this post with a new one
            [action.postId]: postComment(state[action.postId], action)
        }
    }

    return state;
};

export default comments;