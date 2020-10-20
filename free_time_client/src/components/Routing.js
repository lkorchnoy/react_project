import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Home from './Home'
import About from './About'
import VideosContainer from './VideosContainer'
import VideosForm from './VideosForm'




const Routing = () => {
    return (
       <Switch>
           <Route exact path='/' component={VideosContainer} />
           <Route exact path='/about' component={About} />
           <Route path='/form' component={VideosForm} />
           
           
           
           
       </Switch>
            
    
    );
}

export default Routing;
