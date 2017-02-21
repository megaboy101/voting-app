import React from 'react';
import Header from './components/'

class App extends React.Component {
	constructor(props, context) {
		super(props, context);
	}

	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}


export default App;
