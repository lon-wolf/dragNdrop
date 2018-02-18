import React, { Component } from 'react'
import Frame from './Frame'
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Drag And Drop</h1>
                </header>
                <p className="App-intro">
                    Drag and Drop below rows.
                </p>
                <Frame />
            </div>
        )
    }
}