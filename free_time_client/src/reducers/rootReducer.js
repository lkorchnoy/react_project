import { combineReducers } from 'redux'

import { inputMirrorReducer, videosReducer } from './videosReducer'
import { selectedVideoReducer } from './videosReducer'
//import { commentsReducer } from './commentsReducer'

export const rootReducer = combineReducers({
   videos: videosReducer,
   selectedVideo: selectedVideoReducer,
   inputMirror: inputMirrorReducer
})