import React from 'react';
import { connect } from 'react-redux'
import { selectVideo } from '../actions/videosActions'

const VideosList = (props) => {
    const listItems = props.videos.map((video) => {
        return (
            <div>
                <span>{video.creator}</span>
                <button onClick={() => props.selectVideo(video)}>details</button>
            </div>
        )
    })

    return (
        <div className="list-container">
            <h2>Video List</h2>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        videos: state.videos 
    }
}

const mapDispatchToProps = {
    selectVideo: selectVideo 
}

export default connect(mapStateToProps, mapDispatchToProps)(VideosList);
