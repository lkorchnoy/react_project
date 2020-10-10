import React from 'react';
import { connect } from 'react-redux'
import { videosReducer } from '../reducers/videosReducer';

const CommentsList = ({ comments, videoId}) => {
    const c = comments.filter(comment => comment.video_id === videoId)
    return (
        <div>
            {c.map(comment => <ul><li key={comment.id}>{comment.content} </li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentsList);
