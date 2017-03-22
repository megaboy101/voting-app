import React, { Component } from 'react';
import UserWidget from '../common/UserWidget.js';
import PollList from '../common/PollList.js';
import ContentCreator from './ContentCreator.js';

class HomePage extends Component {
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
                    <ContentCreator />
                    <PollList />
                </div>
            </main>
        );
    }
}

export default HomePage;
