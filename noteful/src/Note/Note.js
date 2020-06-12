import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Folders/Folders.css';
import NotefulContext from '../NotefulContext';
import config from '../config';

class Note extends Component {

    static defaultProps = {
        folders: [],
        notes: [],
        onClickDelete: () => {}
    }

    static contextType = NotefulContext;  

    redirectToTarget = () => {
        this.props.history.push(`/`)
      }

      deleteNoteRequest(noteId, cb) {
        fetch(config.API + `/notes/${noteId}`, {
            method: 'DELETE',
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
            console.log('return.json ...');
            return result.json()
        })
        .then(data => {
            this.redirectToTarget();
            cb(noteId)
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {

        const { folders } = this.context;
        let { notes } = this.context;
        const { deleteNote } = this.context;

        const note = notes.find(p =>
            p.id === this.props.match.params.noteId
        )

        const folder = folders.find(p => 
            p.id === note.folderId
        )

        return (
        <div>
            <div className='App-folder'>
            <ul className='FolderList'>
                <li className='foundFolder' key={note.folderId}>
                        <Link to={`/folders/${note.folderId}`}>
                            {folder.name}
                        </Link>
                    </li>
                <li>
                    <button onClick={this.redirectToTarget}> ... Back</button>
                </li>
            </ul>
            </div>
            <div className = 'App-note'>
                <ul className='NotesList'>
                    <li key={note.id}>
                        <Link to={`/notes/${note.id}`}>
                                {note.name}
                        </Link>
                        <button 
                        className='note-btn-delete' 
                        type='button'
                        onClick = {() => {
                            this.deleteNoteRequest(
                                note.id,
                                deleteNote
                            )
                        }}
                    >
                    delete</button>
                    <p>Date Modified: {note.modified}</p>
                    </li>
                </ul>
                <p>{note.content}</p>
            </div>
        </div>
    )
    }
}

export default Note;