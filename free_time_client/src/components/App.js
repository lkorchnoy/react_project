import React from 'react';
import CommentsContainer from './CommentsContainer';

import Router from './Router'

import VideosContainer from './VideosContainer'
//import CommentsContainer from './CommentsContainer'

const App = () => {
    return (
        <div>
            <VideosContainer />
            <Router />
        </div>
    );
}

export default App;

