export const messages = (state = {messages: []}, action) => {
    switch (action.type) {
        case 'SAVE_MESSAGE':
            return {
                messages: state.messages.concat(action.message)
            };
        default:
            return state;
    }
};
