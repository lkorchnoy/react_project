import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import VideosContainer from './VideosContainer'

//import CommentsContainer from './CommentsContainer';

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/videos' component={VideosContainer} />
           
           
       </Switch>
            
    
    );
}

export default Router;
