import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchComments, addComment } from '../actions/commentsActions'

import CommentInput from './CommentInput'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }
    render() {
        return (
            <div>
                Comments Container
                <CommentInput addComment={this.props.addComment} videoId={this.props.videoId}/>
            </div>
        );
    }
}



export default connect(null, { fetchComments, addComment })(CommentsContainer);
