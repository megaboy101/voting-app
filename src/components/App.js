import React from 'react';
import Header from './common/Header.js';

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
			<div>
				<Header />
				{this.props.children}
			</div>
        );
    }
}


export default App;
