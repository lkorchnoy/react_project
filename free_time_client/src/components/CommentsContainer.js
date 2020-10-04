import React, { Component } from 'react';
import { connect } from 'react-redux'

import { fetchComments } from '../actions/commentsActions'


class CommentsContainer extends Component {
    render() {
        return (
            <div>
                Comments Container
            </div>
        );
    }
}

export default connect(null, { fetchComments })(CommentsContainer);
