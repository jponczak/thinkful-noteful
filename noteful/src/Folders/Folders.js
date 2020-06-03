import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Folders.css';

class Folders extends Component {
    render() {
        var folderList = this.props.fData.map(folder => {
            return(
                <li key={folder.id}>
                    <Link to={`/folders/${folder.id}`}>
                        {folder.name}
                    </Link>
                </li>
            )
        })

        var noteList = this.props.nData.map(note => {
            return(
                <li key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        {note.name} :: {note.modified}
                    </Link>
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
                <ul>
                    
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
