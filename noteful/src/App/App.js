import React, {Component} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import './Flex.css';
import Folders from '../Folders/Folders';
import Folder from '../Folder/Folder';
// import Note from '../Note/Note';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       notes: [],
  //       folders: []
  //   };
  // }
    render() {
      console.log('app props');
      console.log(this.props);
      const folderData = this.props.data.folders;
      const notesData = this.props.data.notes;
      console.log(folderData);
      // const Folders = (props) => console.log(this.props.data);
      return (
        <div className="App">
          <nav>
            <Link to='/'>Noteful</Link>
          </nav>
          <div>
          {/* <div className='addFolder'>
            <button>folder button</button>
          </div> */}
          <Route 
              exact path='/' render={(props) => <Folders { ...props} fData={folderData} nData={notesData} />}
              // component = {Folders}
          />
          <Route
              path='/folders/:folderId'
              render={(props) => <Folder { ...props} fData={folderData} nData={notesData} />}
          />
          {/* <Route
            path='/folders/add-folder'
            component = {AddFolder}
          /> */}
          {/* <Route 
              exact path='/'
              component = {Notes}
          /> */}
          {/* <Route 
              path='/notes/:noteId'
              component = {Note}
          /> */}
          </div>
        </div>
      )
    }
  }

  export default App;