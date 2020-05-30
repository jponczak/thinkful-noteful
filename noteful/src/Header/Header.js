import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <nav>
                <h1><Link to='/'>Note<span className="App-subTitle">ful</span></Link></h1>
            </nav>
        )
    }
}


export default Header;