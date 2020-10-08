import React, { Component } from 'react';

class CommentInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        };
    }
    handleChange = e => {
        const { name, value } = e.target 

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addComment({
                content: this.state.content,
                video_id: this.props.videoId
            }
        )
        this.setState({
            content: '',
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>Add Comment</label>
                <input type='text' value={this.state.content} onChange={(e) => this.handleChange(e)} name="content"/>
                <input type="submit" />
                </form>
                
            </div>
        )
    }

}


export default CommentInput;
