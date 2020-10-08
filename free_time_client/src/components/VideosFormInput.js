import React from 'react';
import { connect } from 'react-redux'
import { videosReducer } from '../reducers/videosReducer';

const VideosFormInput = ({ videos }) => {
    console.log(videos)
    return (
        <div>
            {videos.map(video => <ul><li key={video.id}>{video.category} - {video.description} - {video.link} - {video.creator} </li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { videos: state.videos }
}

export default connect(mapStateToProps)(VideosFormInput);


