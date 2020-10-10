export const commentsReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_COMMENTS':
            return action.payload
        case 'ADD_COMMENT':
            return [...state, action.payload]  
        case 'VIDEO_ID':
            return [...state, action.payload]   
            default:
                return state 
    }
} 