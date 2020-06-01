import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import './Flex.css';
// import Header from '../Header/Header';
import Folders from '../Folders/Folders';
import Folder from '../Folder/Folder';
import Notes from '../Notes/Notes';
import Note from '../Note/Note';
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
          <div>
          <Route 
              exact path='/'
              component = {Folders}
          />
          <Route
              path='/folders/:folderId'
              component = {Folder}
          />
          <Route 
              exact path='/'
              component = {Notes}
          />
          <Route 
              path='/notes/:noteId'
              component = {Note}
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