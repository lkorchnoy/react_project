import React from 'react';


class Navbar extends React.Component{
    render() {
        return (
            <div className="Header">
                <ul id="nav">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/form">Form</a></li>
            </ul>
            </div>
        );
    }
}

export default Navbar;
