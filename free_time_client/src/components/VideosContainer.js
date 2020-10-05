import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchVideos } from '../actions/videosActions'
import VideosList from './VideosList'
import VideosForm from './VideosForm';

class VideosContainer extends Component {

    componentDidMount() {
        this.props.fetchVideos()
    }
    render() {
        return (
            <div>
                Videos Container 
                <VideosForm />
                <VideosList />

            </div>
        );
    }
}

export default connect(null, { fetchVideos })(VideosContainer);
