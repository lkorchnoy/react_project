export const fetchVideos = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/videos')
        .then(resp => resp.json())
        .then(videos => dispatch({ type: 'FETCH_VIDEOS', payload: videos }))
    }
}

export const selectVideo = (video) => {
    return {
        type: 'VIDEO_SELECTED',
        payload: video 
    }
}
 

export const addVideo = video => {

    return dispatch => {
        fetch('http://127.0.0.1:3000/videos', {
            method: 'POST',
            body: JSON.stringify(video),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(video => dispatch({ type: 'ADD_VIDEO', payload: video }))
        }

    }