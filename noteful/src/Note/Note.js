import React, {Component} from 'react';
import {Link} from 'react-router-dom';


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