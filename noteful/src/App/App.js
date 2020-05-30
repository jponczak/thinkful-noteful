import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Flex.css';
// import Header from '../Header/Header';
import Folders from '../Folders/Folders';
import Notes from '../Notes/Notes';
// import dummyStore from '../dummy-data/dummy-store';


class App extends Component {
    state = {
        notes: [],
        folders: []
    };

    render() {
      return (
        <div className="App">
          {/* <Header /> */}
          <nav>
            <Link to='/'>Noteful</Link>
          </nav>
          <div className = 'App-folders'>
            <Route 
              exact path='/'
              component = {Folders}
            />
          </div>
          <div className = 'App-notes'>
          <Route 
              exact path='/'
              component = {Notes}
            />
          </div>
          {/* <section className="App-landing">
            <section className="App-folders">
              <section>
                <ul>
                  <li className="folder-name">Folder 1</li>
                  <li className="folder-name">Folder 2</li>
                </ul>
                <a className="folder-btn">+ Folder</a>
              </section>
            </section>
            <section className="App-notes">
              <section>
                <section className="App-note">
                  <h1>note 1</h1>
                  <p>Date Modified:
                    <span className="note-date">May 01, 2020</span>
                    <a className="note-btn">Delete</a>                    
                  </p>
                </section>
                <section className="App-note">
                  <h1>note 2</h1>
                  <p>Date Modified:
                    <span className="note-date">May 01, 2020</span>
                    <a className="note-btn">Delete</a>                    
                  </p>
                </section>
              </section>
            </section>
          </section>
          <footer className="App-about">
          </footer> */}
          {/* <header className="noteHeader">
          </header> */}
        </div>
      )
    }
  }

  export default App;