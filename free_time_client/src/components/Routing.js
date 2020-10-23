import React from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import About from './About'
import VideosContainer from './VideosContainer'
import VideosForm from './VideosForm'
import VideosDetails from './VideosDetails'
//import { fetchVideos } from '../actions/videosActions'



const Routing = (props) => {
    //debugger;
    return (
       <Switch>
           
           <Route path="/videos/:id" render={(props) => {
                return (
                    <VideosDetails video={props.videos.find(
                        video => video.id === props.match.params.id 
                    )}
                    />
                );
                }}
                />
                
           <Route exact path='/' component={VideosContainer} />
           <Route exact path='/about' component={About} />
           <Route path='/form' component={VideosForm} />
           
           
           
           
       </Switch>
            
    
    );
}

const mapStateToProps = (state) => {
    return {
      videos: state.videos
    }
  }

export default connect(mapStateToProps)(Routing);
