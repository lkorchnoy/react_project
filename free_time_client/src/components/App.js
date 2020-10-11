import React from 'react';
import Routing from './Routing'
import Navbar from './Navbar'

import VideosContainer from './VideosContainer'
import CommentsContainer from './CommentsContainer';





const App = () => {
    return (
        <div className="App">
         <Navbar />
         <Routing />
        </div>
        
        
    );
}

export default App;

