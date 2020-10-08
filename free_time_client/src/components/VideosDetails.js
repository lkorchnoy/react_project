import React from "react";
import { connect } from "react-redux";
import CommentsContainer from './CommentsContainer';
import VideosList from './VideosList'

const VideosDetails = (props) => {
  if (!props.selectedVideo) {
    return (
      <div className="details-container" style={{ width: "60%" }}>
        <h2>Video</h2>
        <div className="properties">
          <p>Select Video</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="details-container" style={{ width: "60%" }}>
        <h2>Video</h2>
        <div className="properties">
          <p>Category: {props.selectedVideo.category}</p>
          <p>Description: {props.selectedVideo.description}</p>
          <p>
            Link: <a target="_blank" href={props.selectedVideo.link}>{props.selectedVideo.link}</a>
          </p>
          <p>Creator: {props.selectedVideo.creator}</p>
          <CommentsContainer videoId={props.selectedVideo.id}/>
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
