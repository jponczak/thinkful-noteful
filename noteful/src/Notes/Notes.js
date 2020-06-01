import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DUMMYDATA from '../dummy-data/dummy-store';

class Notes extends Component {
    render() {
        return (
            <div className = 'App-notes'>

            <ul className='NotesList'>
            {DUMMYDATA.notes.map(note => 
                <li key={note.id}>
                    <Link to={`/notes/${note.id}`}>
                        {note.name} || {note.modified}
                    </Link>
                </li>
            )}
        </ul>
        </div>
        )
    }
}

export default Notes;