import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Folder.css';
import '../Folders/Folders.css';

class Folder extends Component {

    render() {
        const folder = this.props.fData.find(p =>
            p.id === this.props.match.params.folderId
        )

        const notes = this.props.nData.filter(function (note) { 
            return folder.id === note.folderId; 
        });

        const notesList = notes.map(note => {
            return(
                <li key={note.id}>
                <div className="note">
                    <Link to={`/notes/${note.id}`}>
                            {note.name}
                    </Link>
                        <button className='note-btn-delete' type="button">delete</button>
                        <p>Date Modified: {note.modified}</p>
                </div>
                </li>
            )
        })

        return (
        <div>
            <div className='App-folder'>
                <ul className='FolderList'>
                    {this.props.fData.map(folder => 
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