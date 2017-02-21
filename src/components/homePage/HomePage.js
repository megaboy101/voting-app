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
							  <li><i className="fa fa-facebook" aria-hidden="true"></i></li>
							  <li><i className="fa fa-instagram" aria-hidden="true"></i></li>
							  <li><i className="fa fa-twitter" aria-hidden="true"></i></li>
							  <li><i className="fa fa-reddit-alien" aria-hidden="true"></i></li>
						  </ul>
					  </aside>
				  </div>

				  <div className="column-primary">
					  <section>
						  <img src="http://placehold.it/180x180" />
						  <div className="section-content">
							  <h2>
								  Do you think free code camp is
								  a positive service, or a terrible one?
							  </h2>
							  <p>SEPTEMBER 8, 2016 | ART</p>
							  <input type="select" placeholder="Choose an option..." />
							  <input type="text" placeholder="Sign in to add an option..." />
						  </div>
					  </section>
					  <section>
						  <img src="http://placehold.it/180x180" />
						  <div className="section-content">
							  <h2>
								  Do you think free code camp is
								  a positive service, or a terrible one?
							  </h2>
							  <p>SEPTEMBER 8, 2016 | ART</p>
							  <input type="select" placeholder="Choose an option..." />
							  <input type="text" placeholder="Sign in to add an option..." />
						  </div>
					  </section>
					  <section>
						  <img src="http://placehold.it/180x180" />
						  <div className="section-content">
							  <h2>
								  Do you think free code camp is
								  a positive service, or a terrible one?
							  </h2>
							  <p>SEPTEMBER 8, 2016 | ART</p>
								  <select name="cars">
									  <option value="volvo">Volvo</option>
									  <option value="saab">Saab</option>
									  <option value="fiat">Fiat</option>
									  <option value="audi">Audi</option>
								  </select>
							  <input type="text" placeholder="Sign in to add an option..." />
						  </div>
					  </section>
				  </div>
			  </main>
		  );
    }
}

export default HomePage;
