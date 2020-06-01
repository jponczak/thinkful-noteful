import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import DUMMYDATA from '../dummy-data/dummy-store';

class Folder extends Component {

    render() {
        console.log('checking out folder ...');
        console.log(this.props.match.params.folderId);


        const folder = DUMMYDATA.folders.find(p =>
            p.id === this.props.match.params.folderId
        )

        const notes = DUMMYDATA.notes.filter(function (note) { 
            return folder.id === note.folderId; 
        });

        console.log(notes);


        return (
            <div>
            <div className='App-folder'>

            <h2>{folder.name}</h2>
            </div>
            <div className='App-note'>
            <ul className='NotesList'>
            {notes.map(note => 
                <li key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        {note.name}
                        {note.modified}
                    </Link>
                </li>
            )}
        </ul>
        </div>
        </div>
        )
    }
}

export default Folder;