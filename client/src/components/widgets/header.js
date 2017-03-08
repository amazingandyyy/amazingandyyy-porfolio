import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
                <div className="header">
                    <div className="logo">
                        <a href="">
                            <img src="https://s3.amazonaws.com/amazingandyyy/logo.png" />
                        </a>
                    </div>
                    <div className="menu">
                        <Link className="item" activeClassName="active" to='/topics'>Topics</Link>
                        <Link className="item" activeClassName="active" to='/projects'>Projects</Link>
                        <Link className="item" activeClassName="active" to='/hackathons'>Hackathons</Link>
                        <Link className="item" activeClassName="active" to='/experiences'>Experiences</Link>
                    </div>
            </div>)
    }
}

export default Header;