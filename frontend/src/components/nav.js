import React from 'react';

function Nav(props) {
    return (
        <React.Fragment>
            <header className="App-header">{props.headerText}</header>
            <nav className="App-nav">
                <button onClick={() => props.leftButtonAction()}>{props.leftButtonText}</button>
                <button onClick={() => props.rightButtonAction()}>{props.rightButtonText}</button>
            </nav>
        </React.Fragment>
    )
}

export default Nav;