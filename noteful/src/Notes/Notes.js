import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Notes extends Component {
    render() {
        return (
            <div className = 'App-notes'>

            <ul className='NotesList'>
            {this.props.nData.map(note => 
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