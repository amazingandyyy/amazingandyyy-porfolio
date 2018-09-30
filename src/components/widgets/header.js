import React, {Component} from 'react';
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
                <div className="header fixed">
                    <div className="logo">
                        <Link to="/">
                            <img src="https://s3.amazonaws.com/amazingandyyy/logo.png" />
                        </Link>
                    </div>
                    <div className="menu">
                        {/* <Link className="item" activeClassName="active" to='/topics'>Topics</Link>
                        <Link className="item" activeClassName="active" to='/hackathons'>Hackathons</Link> */}
                        <a className="item" href='https://github.com/amazingandyyy' target='_blank'>Github</a>
                    </div>
            </div>)
    }
}

export default Header;