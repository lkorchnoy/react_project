import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchVideos } from '../actions/videosActions'

import VideosDetails from './VideosDetails'
import VideosList from './VideosList'
import VideosForm from './VideosForm'
import './Videos.css'
//import { Route } from 'react-router-dom'


class VideosContainer extends Component {

    componentDidMount() {
        this.props.fetchVideos()
    }
    render() {
        return (
            
            <div className="container">
                Videos Container 
                <VideosDetails />
                <VideosList />
                <VideosForm />
                
            </div>
        );
    }
}



export default connect(null, { fetchVideos })(VideosContainer);
