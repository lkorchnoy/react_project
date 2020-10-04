import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchVideos } from '../actions/videosActions'

class VideosContainer extends Component {

    componentDidMount() {
        this.props.fetchVideos()
    }
    render() {
        return (
            <div>
                Videos Container 
            </div>
        );
    }
}

export default connect(null, { fetchVideos })(VideosContainer);
