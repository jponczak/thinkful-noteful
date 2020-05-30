import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import DUMMYDATA from '../dummy-data/dummy-store';

class Folders extends Component {
    render() {
        return (
            <ul className='FolderList'>
                {DUMMYDATA.folders.map(folder => 
                    <li key={folder.id}>
                        <Link to={`/folder/${folder.id}`}>
                            {folder.name}
                        </Link>
                    </li>
                )}
            </ul>
        )
    }
}

export default Folders;
