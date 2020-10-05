import React from 'react';
import { connect } from 'react-redux'

const VideosList = ({ videos }) => {
    return (
        <div>
            {videos.map(video => <ul><li key={video.id}>{video.category} - {video.description} - {video.link} - {video.creator} </li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { videos: state.videos }
}

export default connect(mapStateToProps)(VideosList);
