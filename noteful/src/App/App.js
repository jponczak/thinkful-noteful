import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Folders from '../Folders/Folders';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';
import AddFolder from '../AddFolder/AddFolder';
import AddNote from '../AddNote/AddNote';
import NotefulContext from '../NotefulContext';
import config from '../config';
import FolderError from '../FolderError/FolderError';
import AddFolderError from '../AddFolderError/AddFolderError';
import './App.css';
import './Flex.css';

class App extends Component {

    state = {
      folders: [],
      notes: [],
      error: null
    };

    setFolders = folders => {
      this.setState({
        folders,
        error:null
      })
    }

    setNotes = notes => {
      this.setState({
        notes,
        error:null
      })
    }

    addFolder = folder => {
      this.setState({
        folders: [ ...this.state.folders, folder]
      })
    }

    addNote = note => {
      this.setState({
        notes: [...this.state.notes, note]
      })
    }

    deleteNote = noteId => {
      const newNotes = 
        this.state.notes.filter
          (n => n.id !== noteId)
      
      this.setState({
          notes: newNotes
      })
    }

    componentDidMount() {
      let urls = [
        `${config.API}/folders`,
        `${config.API}/notes`
      ];

      let requests = urls.map(url => fetch(url));

      Promise.all(requests)
        .then(response => Promise.all(response.map(r => r.json())))
        .then(result => {
          this.setFolders(result[0]);
          this.setNotes(result[1]);
        })
      }

    render() {
      const contextValue = {
        folders: this.state.folders,
        notes: this.state.notes,
        deleteNote: this.deleteNote,
        addNote: this.addNote,
        addFolder: this.addFolder
      }

      return (
        <div className="App">
          <nav>
            <Link to='/'>Noteful</Link>
          </nav>
          <NotefulContext.Provider value={contextValue}>

          <div>
          <Route 
              exact path='/' 
              component = {Folders}
//              render={(props) => <Folders { ...props} fData={this.state.folders} nData={this.state.notes} />}
          />
          <Route
              path='/folders/:folderId'
              component = {Folder}
          />
          <Route
              path='/notes/:noteId'
              component = {Note}
          />
          <FolderError>
            <Route
              path='/add-folder'
              component = {AddFolder}
            />
          </FolderError>
          <AddFolderError>
            <Route
              path='/add-note'
              component = {AddNote}
            />
          </AddFolderError>
          </div>
        </NotefulContext.Provider> 
        </div>
      )
    }
  }

  export default App;