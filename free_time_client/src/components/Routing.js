import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import About from './About'
import VideosContainer from './VideosContainer'
import VideosForm from './VideosForm'
import VideosDetails from './VideosDetails'
//import { fetchVideos } from '../actions/videosActions'



class Routing extends Component {

    render() {
    //debugger;
    return (
        <>
       <Switch>

           <Route exact path='/' component={VideosContainer} />
           <Route exact path='/about' component={About} />
           <Route path='/form' component={VideosForm} />
           {/* <Route exact path="/videos/:id" component={VideosDetails} /> */}
               
           
           
           <Route path="/videos/:id" render={() => 
                <VideosDetails videos={this.props.videos} />}
                
            />
                
           
           
           
           
           
       </Switch>
       </>
       
        );
    }
}

const mapStateToProps = ({ videos }) => ({ videos })

export default connect(mapStateToProps)(Routing);
