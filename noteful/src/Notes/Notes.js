import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import NotefulContext from '../NotefulContext';

class Notes extends Component {
    static defaultProps = {
        folders:[],
        notes: []
    }

    static contextType = NotefulContext;

    render() {
        const { notes } = this.context;

        return (
            <div className = 'App-notes'>

            <ul className='NotesList'>
            {notes.map(note => 
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