import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import './App.css';
import './Flex.css';
import Folders from '../Folders/Folders';
import Folder from '../Folder/Folder';
import Note from '../Note/Note';

class App extends Component {

    render() {
      const folderData = this.props.data.folders;
      const notesData = this.props.data.notes;
      return (
        <div className="App">
          <nav>
            <Link to='/'>Noteful</Link>
          </nav>
          <div>
          <Route 
              exact path='/' render={(props) => <Folders { ...props} fData={folderData} nData={notesData} />}
          />
          <Route
              path='/folders/:folderId'
              render={(props) => <Folder { ...props} fData={folderData} nData={notesData} />}
          />
          <Route
              path='/notes/:noteId'
              render={(props) => <Note { ...props} fData={folderData} nData={notesData} />}
          />
          </div>
        </div>
      )
    }
  }

  export default App;