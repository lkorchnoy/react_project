export const fetchComments = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/comments')
        .then(resp => resp.json())
        .then(comments => dispatch({ type: 'FETCH_COMMENTS', payload: comments }))
    }
}

export const addComment = comment => {
    debugger;
    return dispatch => {
        fetch('http://127.0.0.1:3000/comments', {
            method: 'POST',
            body: JSON.stringify(comment),
            headers: { 'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(comment => dispatch({ type: 'ADD_COMMENT', payload: comment }))
        }

    }
    
