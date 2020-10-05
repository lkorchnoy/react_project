import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchComments } from '../actions/commentsActions'
import CommentsForm from './CommentsForm'
import CommentsList from './CommentsList'

class CommentsContainer extends Component {

    componentDidMount() {
        this.props.fetchComments()
    }
    render() {
        return (
            <div>
                Comments Container
                <CommentsForm />
                <CommentsList />
            </div>
        );
    }
}

export default connect(null, { fetchComments })(CommentsContainer);
