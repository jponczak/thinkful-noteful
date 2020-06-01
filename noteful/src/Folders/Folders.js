import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DUMMYDATA from '../dummy-data/dummy-store';

class Folders extends Component {
    render() {
        return (
            <div className = 'App-folder'>
            <ul className='FolderList'>
                {DUMMYDATA.folders.map(folder => 
                    <li key={folder.id}>
                        <Link to={`/folders/${folder.id}`}>
                            {folder.name}
                        </Link>
                    </li>
                )}
            </ul>
            </div>
        )
    }
}

export default Folders;
