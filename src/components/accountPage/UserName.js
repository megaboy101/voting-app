import React from 'react';
import { connect } from 'react-redux';

const UserName = ({ username }) => {
    return (
        <section className="section-username">
            <h1>{username}</h1>
        </section>
    );
};


function mapStateToProps(state) {
    return {
        username: state.user.username
    };
}

export default connect(mapStateToProps)(UserName);
