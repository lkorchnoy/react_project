export const fetchVideos = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/videos')
        .then(resp => resp.json())
        .then(videos => dispatch({ type: 'FETCH_VIDEOS', payload: videos }))
    }
}