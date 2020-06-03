import React, {Component} from 'react';

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = { folder: '' };    
      }

      myChangeHandler = (event) => {
        this.setState({folder: event.target.value});
      }

    redirectToTarget = () => {
        this.props.history.push(`/`)
      }

    render() {
        console.log('add !');
        return (
            <div>
                <div className='App-folder'>
                    <ul>
                        <li>
                            <button onClick={this.redirectToTarget}> ... Back</button>
                        </li>
                    </ul>
                </div>
                <div className='App-note'>
                <form onSubmit={this.myChangeHandler}>
                    <h1>Add a folder ... {this.state.folder}</h1>
                    <p>Folder:</p>
                    <input
                        type='text'
                        onChange={this.myChangeHandler}
                    />
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        )
    }
}

export default AddFolder;