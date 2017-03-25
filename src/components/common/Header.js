import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const Header = ({ username }) => {
    let loginLink;
    if (username === 'Guest') {
        loginLink =
        <a className="login-link" href={'/api/auth/twitter'}>
            <i className="fa fa-twitter" aria-hidden="true"></i>
            Login with Twitter
        </a>;
    }
    else {
        loginLink = <span>Welcome, {username}</span>;
    }

    return (
        <header>
            <div className="container-main">
                <h1>
                    Opinionated
                    <span>Have an opinion</span>
                </h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/account">Account</Link>
                    {loginLink}
                </nav>
            </div>
        </header>
    );
};

export default connect(state => ({username: state.user.username}))(Header);
