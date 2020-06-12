import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';
import config from '../config';
import './Folders.css';

class Folders extends Component {
    static defaultProps = {
        folders:[],
        notes: []
    }

    static contextType = NotefulContext;

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
        const {folders } = this.context;
        const { notes } = this.context;
        const { deleteNote } = this.context;

        var folderList = folders.map(folder => {
            return(
                <li key={folder.id}>
                    <Link to={`/folders/${folder.id}`}>
                        {folder.name}
                    </Link>
                </li>
            )
        })
    
        var noteList = notes.map(note => {
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
            <div className = 'App-folder'>
                <ul className='FolderList'>
                    {folderList}
                    <li>
                        <Link to={`/add-folder`}>
                            <button className='noteful-folder-btn'>+ folder</button>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className = 'App-notes'>
                <ul className='NotesList'>
                    {noteList}
                </ul>
            </div>
        </div>

        )
    }
}

export default Folders;
