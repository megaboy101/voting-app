import React, { Component } from 'react';
import UserWidget from '../common/UserWidget.js';
import PollList from '../common/PollList.js';
import UserName from './UserName.js';

class AccountPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <main className="container-main">
                <div className="column-aside">
                    <UserWidget />
                </div>

                <div className="column-main">
                    <UserName />
                    <PollList filter="user" />
                </div>
            </main>
        );
    }
}


export default AccountPage;
