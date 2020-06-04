import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../Folders/Folders.css';

class Note extends Component {

    redirectToTarget = () => {
        this.props.history.push(`/`)
      }

    render() {
        const note = this.props.nData.find(p =>
            p.id === this.props.match.params.noteId
        )

        const folder = this.props.fData.find(p => 
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
                                <button className='note-btn-delete' type="button">delete</button>
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