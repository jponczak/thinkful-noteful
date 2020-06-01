import React, {Component} from 'react';
import DUMMYDATA from '../dummy-data/dummy-store';

class Note extends Component {
    render() {
        console.log('checking out note ...');
        console.log(this.props.match.params.noteId);
        const note = DUMMYDATA.notes.find(p =>
            p.id === this.props.match.params.noteId
        )

        const folder = DUMMYDATA.folders.find(p => 
            p.id === note.folderId
        )

            console.log(folder);

            return (
            <div>
            <div className='App-folder'>
            <h2>{folder.name}</h2>
        </div>
            <div className = 'App-note'>

            <article className='Note'>
                <h2>{note.name}</h2>
                <p>{note.content}</p>

            </article>
            </div>
            </div>
        )
    }
}

export default Note;