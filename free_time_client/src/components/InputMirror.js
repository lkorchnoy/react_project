import React from 'react';
import { connect } from 'react-redux';

function InputMirror(props) {
    return (
        <div>
            <input value={props.inputValue} />
            <p>{props.inputValue}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue
    }
}

export default connect(mapStateToProps)(InputMirror);