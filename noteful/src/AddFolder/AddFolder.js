import React, {Component} from 'react';
import NotefulContext from '../NotefulContext';
import config from '../config';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddFolder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '', 
            name: ''
        }
      }
     
    static propTypes = {
        name: PropTypes.string.isRequired
    }

    static contextType = NotefulContext;

    updateName(name) {
        const idVal = uuid.v4();
        this.setState({id:idVal, name: name});
    }

    myChangeHandler = (event) => {
        this.setState({folder: event.target.value});
    }

    redirectToTarget = () => {
        this.props.history.push(`/`)
    }

    handleSubmit(event,  cb) {
          event.preventDefault();
          const { name } = this.state;
          fetch(config.API + `/folders/`, {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(result => {
                if (!result.ok) {
                    return result.json().then(error => {
                        throw error;
                    })
                }
                return result.json()
            })
            .then(data => {
                cb({'id': '', 'name': name})
            })
            .then(
                this.redirectToTarget()
            )
            .catch(error => {
                console.log(error);
            })

    } 

    render() {
        const { addFolder } = this.context;

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
                <form onSubmit = {e => this.handleSubmit(e, addFolder)}>
                    <h1>Add a folder ... {this.state.folder}</h1>
                    <p>Folder:</p>
                    <input
                        type='text'
                        name='name'
                        id='name'
                        onChange={e => this.updateName(e.target.value)}
                    />
                    <input type="submit" value="Submit" />
                </form>
                </div>
            </div>
        )
    }
}

export default AddFolder;