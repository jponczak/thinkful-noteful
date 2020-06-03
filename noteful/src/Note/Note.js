import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Note extends Component {
    render() {
        const note = this.props.nData.find(p =>
            p.id === this.props.match.params.noteId
        )

        // const folder = this.props.fData.find(p => 
        //     p.id === note.folderId
        // )

            return (
            <div>
                <div className='App-folder'>
                <ul className='FolderList'>
                    {this.props.fData.map(folder => 
                    (folder.id === note.folderId) ?
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
                    <li>
                        <button type="submit">+ folderz</button>
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