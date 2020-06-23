import React, {Component} from 'react';
import './AddNote.css';
import NotefulContext from '../NotefulContext';
import config from '../config';
import PropTypes from 'prop-types';
import ValidationError from '../ValidationError/ValidationError';
import uuid from 'uuid';


class AddNote extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            id: '',
            name: '',
            modified: '',
            folderId: '',
            content: '',
            touched: false

        };    
      }

      static contextType = NotefulContext;

      static defaultProps = {
        name: '',
        content: ''
        }

      static propTypes = {
        name: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }

      updateTitle(title) {

        const { folders } = this.context;
        const defaultFolder = folders[0];
        let folderId = '';
        const noteId = uuid.v4();

        if (typeof defaultFolder !== 'undefined') {
            folderId = defaultFolder.id;
            }

        this.setState({
            id: noteId,
            name: title,
            folderId: folderId,
            modified: new Date().toISOString(),
            touched: true
        })
      }

      validateTitle() {
        const name = this.state.name;

        if (name.length === 0) {
            return 'Note title is required ...';
        } else if (name.length === 1) {
            return 'More than 1 character is required ...'
        }
      }

      validateContent() {
        const content = this.state.content.trim();
        if (content.length === 0) {
            return 'Content is required ...';
        } 
      }

      updateContent(content) {
          this.setState({
              content: content
          })
      }

      updateFolder(folderId) {

        const noteId = uuid.v4();
        const modifiedDate = new Date().toISOString();
        this.setState({
            id: noteId,
            modified: modifiedDate,
            folderId: folderId
        })
      }

      myChangeHandler = (event) => {
        this.setState({folder: event.target.value});
      }

    redirectToTarget = () => {
        this.props.history.push(`/`)
      }

      handleSubmit(event,  cb) {
        event.preventDefault();
        const { id, name, modified, folderId, content } = this.state;
        fetch(config.API + `/notes/`, {
              method: 'POST',
              body: JSON.stringify(this.state),
              headers: {
                  'content-type': 'application/json'
              }
          })
          .then(result => {
              if (!result.ok) {
                  return result.json().then(error => {
                      throw error;
                  })
              }
              return result.json()
          })
          .then(data => {
              cb({'id': id, 
              'name': name,
                'modified': modified,
                'folderId': folderId,
                'content': content})
          })
          .then(
              this.redirectToTarget()
          )
          .catch(error => {
              console.log(error);
          })

  } 

    render() {
        const { folders } = this.context;
        const { addNote } = this.context;
        const nameError = this.validateTitle();

        var folderList = folders.map(folder => {
            return(
                <option name={folder.name} value={folder.id} key={folder.id} id={folder.id}>{folder.name}</option>
            )
        })

        return(
            <div>
                <div className='App-folder'>
                    <ul>
                        <li>
                            <button onClick={this.redirectToTarget}> ... Back</button>
                        </li>
                    </ul>
                </div>
                <div className='App-note container'>
                <h1>Add a note ...</h1>
                <form onSubmit= { e => this.handleSubmit(e, addNote)}>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor='title'>Title</label>
                        </div>
                        <div className="col-75">
                            <input 
                            type='text' 
                            name='title'
                            id='title'
                            onChange = {e => this.updateTitle(e.target.value)} />
                            {(this.state.touched) && <ValidationError message={nameError} />}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor='title'>Note</label> 
                        </div>
                        <div className="col-75">
                            <textarea 
                            value={this.state.content.value}
                            id='content'
                            name='content' 
                            onChange = {e => this.updateContent(e.target.value)} />
                            
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor='title'>Folder</label> 
                        </div>
                        <div className="col-75">
                            <select value={this.state.folder} 
                            onChange={e => this.updateFolder(e.target.value)}>
                                {folderList}
                            </select>                            
                        </div>
                    </div>
                    <div className="row">
                        <button 
                            type = "submit"
                            disabled={this.validateTitle()}
                        >Submit</button>
                    </div>                    
                </form>
                </div>
            </div>
        )
    }
}

export default AddNote;