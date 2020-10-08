import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import VideosContainer from './VideosContainer'
import VideosDetails from './VideosDetails'
import VideosForm from './VideosForm'


//import CommentsContainer from './CommentsContainer';

const Router = () => {
    return (
       <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/about' component={About} />
           <Route path='/videos' component={VideosContainer} />
           <Route path='/list' component={VideosDetails} />
           <Route path='/form' component={VideosForm} />
           
           
       </Switch>
            
    
    );
}

export default Router;
