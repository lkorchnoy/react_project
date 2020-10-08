import React from 'react';
import Router from './Router'

import VideosContainer from './VideosContainer'
import CommentsContainer from './CommentsContainer';


const App = () => {
    return (
        <div>
            <VideosContainer />
            <CommentsContainer />
            <Router />
        </div>
    );
}

export default App;

