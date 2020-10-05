import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import VideosList from './VideosList'

import CommentsContainer from './CommentsContainer';

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/videos' component={VideosList} />
           <Route path='/comments' component={CommentsContainer} />
       </Switch>
            
    
    );
}

export default Router;
