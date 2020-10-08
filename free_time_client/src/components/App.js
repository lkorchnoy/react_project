import React from 'react';
import Router from './Router'

import VideosContainer from './VideosContainer'


const App = () => {
    return (
        <div>
            <VideosContainer />
            <Router />
        </div>
    );
}

export default App;

