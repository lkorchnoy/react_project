import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchVideos } from '../actions/videosActions'
import VideosList from './VideosList'
import VideosDetails from './VideosDetails'
import VideosForm from './VideosForm'

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
