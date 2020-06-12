import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import config from '../config';

import './Folder.css';
import '../Folders/Folders.css';

class Folder extends Component {
    static defaultProps = {
        folders: [],
        notes: [],
        onClickDelete: () => {}
    }

    static contextType = NotefulContext;

    componentDidMount() {
        const { notes } = this.context;
        const deleteNote = this.context;
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
            return result.json()
        })
        .then(data => {
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

        const folder = folders.find(p =>
            p.id === this.props.match.params.folderId
        )

        notes = notes.filter(function (note) { 
             return folder.id === note.folderId; 
        });

        const notesList = notes.map(note => {
            return(
                <li key={note.id}>
                <div className="note">
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
                </div>
                </li>
            )
        })

        return (
                <div>
                    <div className='App-folder'>
                        <ul className='FolderList'>
                            {folders.map(folder => 
                            (folder.id === this.props.match.params.folderId) ?
                            (
                                <li className='foundFolder' key={folder.id}>
                                    <Link to={`/folders/${folder.id}`}>
                                        {folder.name}
                                    </Link>
                                </li>
                            ) :
                            (     
                                <li key={folder.id}>
                                    <Link to={`/folders/${folder.id}`}>
                                        {folder.name}
                                    </Link>
                                </li>)

                            )}
                        </ul>
                </div>
                <div className='App-note'>
                    <ul className='NotesList'>
                        {notesList}
                        <li>
                            <Link to='/add-note'>
                                <button className='noteful-folder-btn'>+ note</button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Folder;