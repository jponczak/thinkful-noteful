import React, {Component} from 'react';
import './AddNote.css';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            content: 'add your note content here ...',
            folder: ''
        };    
      }

      myChangeHandler = (event) => {
        this.setState({folder: event.target.value});
      }

    redirectToTarget = () => {
        this.props.history.push(`/`)
      }

    render() {
        var folderList = this.props.fData.map(folder => {
            return(
                <option name={folder.name}>{folder.name}</option>
            )
        })

        return(
            <div>
                <div className='App-folder'>
                    <ul>
                        <li>
                            <button onClick={this.redirectToTarget}> ... Back</button>
                        </li>
                    </ul>
                </div>
                <div className='App-note container'>
                <h1>Add a note ...</h1>
                <form onSubmit={this.myChangeHandler}>
                    <div className="row">
                        <div className="col-25">
                            <label for='title'>Title</label>
                        </div>
                        <div className="col-75">
                            <input type="text" value={this.state.title} onChange = {this.myChangeHandler} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for='title'>Note</label> 
                        </div>
                        <div className="col-75">
                            <textarea value={this.state.content} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label for='title'>Folder</label> 
                        </div>
                        <div className="col-75">
                            <select value={this.state.folder} onChange={this.handleChange}>
                                {folderList}
                            </select>                            
                        </div>
                    </div>
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>                    
                </form>
                </div>
            </div>
        )
    }
}

export default AddNote;