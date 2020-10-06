export const videosReducer = (state = [], action) => {
    switch(action.type){
        case 'FETCH_VIDEOS':
            return action.payload
            default:
                return state 
    }
} 

export const selectedVideoReducer = (state = null, action) => {
    switch(action.type) {
        case 'MOVIE_SELECTED':
            return action.payload 
         default:
             return state    
    }
}