import React from 'react';
import { connect } from 'react-redux';

const UserName = ({ loggedIn, username }) => {
    if (loggedIn) {
        return (
           <section className="section-username">
              <h1>{username}</h1>
           </section>
        );
    }
    return (
      <section className="section-username">
         <h1>Guest</h1>
      </section>
   );
}


function mapStateToProps(state) {
   return {
      loggedIn: state.user.id,
      username: state.user.username
   }
}

export default connect(mapStateToProps)(UserName);
