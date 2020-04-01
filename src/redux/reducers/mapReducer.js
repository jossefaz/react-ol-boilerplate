export default (state = {}, action) => {
    switch (action.type) {
        case "INIT_MAP":
            return action.payload
        default:
            return state;

    }
    
}