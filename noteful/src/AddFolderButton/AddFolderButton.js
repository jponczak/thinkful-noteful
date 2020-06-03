import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AddFolderButton.css';

class AddFolderButton extends Component {
    render() {
        console.log('button!');
        return (
            <div className='folderButton'>
            <button>+ Folder</button>
            </div>
        )
    }
}

export default AddFolderButton;