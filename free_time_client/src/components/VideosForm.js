import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addVideo } from '../actions/videosActions'


class VideosForm extends Component {

    state = {
        category: '',
        description: '',
        link: '',
        creator: ''
    }

    handleChange = event => {
        const { name, value } = event.target 

        this.setState({
            [name]: value 
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.addVideo(this.state)
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <label>category:</label>
                <input type='text' value={this.state.category} onChange={this.handleChange} name="category"/>
                < br />
                <label>description:</label>
                <input type='text' value={this.state.description} onChange={this.handleChange} name="description"/>
                < br />
                <label>link:</label>
                <input type='text' value={this.state.link} onChange={this.handleChange} name="link"/>
                < br />
                <label>creator:</label>
                <input type='text' value={this.state.creator} onChange={this.handleChange} name="creator"/>
                < br />

                <input type='submit' value="Create Video" />
            </form>
                
            
        );
    }
}

export default connect(null, { addVideo })(VideosForm);
