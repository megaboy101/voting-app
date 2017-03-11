import React from 'react';

const LoginPage = () => {
    return (
      <main>
         <a href="http://localhost:3000/api/auth/twitter">Login with Twitter</a>
      </main>
    );
};

function mapDispatchToProps(dispatch) {
   return {
      login: function() {
         dispatch(loadUser());
      }
   };
}

export default LoginPage;
