export const videosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_VIDEOS':
            return action.payload
        case 'ADD_VIDEO':
            return [...state, action.payload]
        
            default:
                return state 
    }
} 

export const selectedVideoReducer = (state = null, action) => {
    switch(action.type) {
        case 'VIDEO_SELECTED':
            return action.payload 
         default:
             return state    
    }
}



