import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Lorum ipsum</p>
                <a href="https://reactjs.org" data-cy="learn-react-link">
                    Learn React
                </a>
            </header>
        </div>
    );
};

export default App;
