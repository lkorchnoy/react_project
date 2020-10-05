import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addComment } from '../actions/commentsActions'


class CommentsForm extends Component {

    state = {
        content: '',
        video_id: ''
    }

    handleChange = e => {
        const { name, value } = e.target 

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>Content:</label>
                <input type='text' value={this.state.content} onChange={this.handleChange} name="content"/>
                < br />
                <label>Video Id:</label>
                <input type='text' value={this.state.video_id} onChange={this.handleChange} name="video_id"/>
                < br />
                <input type='submit' value="Create Comment" />
            </form>
                
            
        );
    }
}

export default connect(null, { addComment })(CommentsForm);
