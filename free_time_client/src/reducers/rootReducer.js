import { combineReducers } from 'redux'

import { videosReducers } from './videosReducer'
import { commentsReducers } from './commentsReducer'

export const rootReducer = combineReducers({
   videos: videosReducers,
   comments: commentsReducers 
})