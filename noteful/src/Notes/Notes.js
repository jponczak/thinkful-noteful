import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import DUMMYDATA from '../dummy-data/dummy-store';

class Notes extends Component {
    render() {
        return (
            <ul className='NotesList'>
            {DUMMYDATA.notes.map(note => 
                <li key={note.id}>
                    <Link to={`/note/${note.id}`}>
                        {note.name}
                        {note.modified}
                        {note.content}
                    </Link>
                </li>
            )}
        </ul>
        )
    }
}

export default Notes;