import React, { Component } from 'react';

class AccountPage extends Component {
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

				   <div className="column-main">
					   <section className="section-account">
						   <h1>Megaboy101</h1>
						   <h2>About Me:</h2>
						   <p>
							   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							   Suspendisse varius enim in eros elementum tristique.
							   Duis cursus, mi quis viverra ornare, eros dolor interdum
							   nulla, ut commodo diam libero vitae erat. Aenean faucibus
							   nibh et justo cursus id rutrum lorem imperdiet. Nunc
							   ut sem vitae risus tristique posuere.
						   </p>
						   <div className="form form-username">
							   <h2>Change Username:</h2>
							   <input type="text" placeholder="Enter a new username" />
							   <button>Submit</button>
						   </div>
						   <div className="form form-password">
							   <h2>Change Password:</h2>
							   <input type="password" placeholder="Enter your old password" />
							   <input type="password" placeholder="Enter your new password" />
							   <button>Submit</button>
						   </div>
							<button className="signout">Sign out</button>
					   </section>
				   </div>
			  </main>
		  );
    }
}

export default AccountPage;
