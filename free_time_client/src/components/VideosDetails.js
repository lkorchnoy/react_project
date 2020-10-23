import React from "react";
import { connect } from "react-redux";
import CommentsContainer from './CommentsContainer';
import VideosList from './VideosList'
//import { useParams } from "react-router-dom"

const VideosDetails = (props) => {
    
   //const { id } = useParams() 
   //const vid = props.videos.find(video => video.id === parseInt(id))
    //props.selectedVideo.id = parseInt(id)
  if (!props.selectedVideo) {
    return (
      <div className="details-container" style={{ width: "60%" }}>
        <h1>Free Time App</h1>
        <div className="properties">
          <p>Have an awesome time with Free Time! Select Video</p>
        </div>
      </div>
    );
  } else {
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
};

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps)(VideosDetails);
