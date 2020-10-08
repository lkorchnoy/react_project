import React from 'react';
import { connect } from 'react-redux'
import { videosReducer } from '../reducers/videosReducer';

const CommentsList = ({ comments }) => {
    return (
        <div>
            {comments.map(comment => <ul><li key={comment.id}>{comment.content} </li></ul>)}
        </div>
    );
}

const mapStateToProps = state => {
    return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentsList);
