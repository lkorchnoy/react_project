import React from "react";
//import { connect } from "react-redux";
import CommentsContainer from './CommentsContainer';
import VideosList from './VideosList'
//import { useParams } from "react-router-dom"

const VideosDetails = (props) => {
    //debugger;
   
    return (
      <div className="details-container" style={{ width: "60%" }}>
        <h1>Free Time App</h1>
        <div className="properties">
          <p>Category: {props.video.category}</p>
          <p>Description: {props.video.description}</p>
          <p>
            Link: <a target="_blank" href={props.video.link}>{props.video.link}</a>
          </p>
          <p>Creator: {props.video.creator}</p>
          <CommentsContainer videoId={props.video.id}/>
          </div>
      </div>
    );
  }




export default VideosDetails;
