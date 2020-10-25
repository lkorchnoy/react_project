import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import { fetchVideos } from '../actions/videosActions'

import VideosDetails from './VideosDetails'
import VideosList from './VideosList'
import VideosForm from './VideosForm'
import './Videos.css'
import Image from '../image.jpg'



class VideosContainer extends Component {
    
        componentDidMount() {
        this.props.fetchVideos()
    }

    

    render() {
        return (
            <>
            <div className="container">
                
                
                <img src={Image} alt="An image"/>
                <VideosList />
                <VideosForm />
            </div>

            </>
        );

    }
}

const mapStateToProps = ({ videos }) => ({ videos })



export default connect(mapStateToProps, { fetchVideos })(VideosContainer);
