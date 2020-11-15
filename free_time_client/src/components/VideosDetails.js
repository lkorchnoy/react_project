import React from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom"
import CommentsContainer from './CommentsContainer';
import VideosList from './VideosList'




    const VideosDetails = (props) => {
        console.log("props in VideosDetails", props)
        const { id } = useParams()
        const vid = props.videos.find(v =>
            v.id === parseInt(id))

            if (props.videos.length === 0)
            return null 
      return (
        <div className="details-container" style={{ width: "60%" }}>
        <h1>Free Time App</h1>
        <div className="properties">
            
          <p>Category: {vid.category}</p>
          <p>Description: {vid.description}</p>
          <p>
            Link: <a target="_blank" href={vid.link}>{vid.link}</a>
          </p>
          <p>Creator: {vid.creator}</p>
          <CommentsContainer videoId={vid.id}/>
          </div>
      </div>
    );
  }



  

export default VideosDetails;
