import React, { Component } from 'react';

class HomePage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
			  <main className="container-main">
				  <div className="column-aside">
					  <aside>
						  <img src="http://placehold.it/70x70" />
						  <p className="user-stats">
							  	Polls created: 0 <br/>
								Polls voted for: 0 <br/>
								Options created: 0 <br/>
								Verified: NO <br/>
						  </p>
						  <div className="line"></div>
						  <h3>Your Top Polls:</h3>
						  <ul className="top-polls">
							  <li>Nothing here either</li>
							  <li>Nothing here either but there is a lot more content in this one</li>
						  </ul>
						  <div className="line"></div>
						  <ul className="media-icons">
							  	<i className="fa fa-facebook" aria-hidden="true"></i>
								<i className="fa fa-instagram" aria-hidden="true"></i>
								<i className="fa fa-twitter" aria-hidden="true"></i>
								<i className="fa fa-reddit-alien" aria-hidden="true"></i>
						  </ul>
					  </aside>
				  </div>

				  <div className="column-primary">

				  </div>
			  </main>
		  );
    }
}

export default HomePage;
