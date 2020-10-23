import React from 'react';
import { connect } from 'react-redux'
import { selectVideo } from '../actions/videosActions'
import { Link } from 'react-router-dom'


const VideosList = (props) => {
    const listItems = props.videos.map((video) => {
        return (
            <div>
                <span>{video.creator}</span>
             <Link to={`/videos/${video.id}`}>see details</Link>
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
