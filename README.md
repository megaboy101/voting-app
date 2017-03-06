# TODO
1. Setup user authentication


### Passport setup
1. Setup Passport configuration
    - Install and import 'passsport' -S into your server file
    - Setup the passport middleware for express. Passport requires 2 middlewares, one calling its 'initialize' methods to start it up, and one calling its 'session' method to setup persistant login sessions
    - Install and import 'session' -S from 'express-session' into your server file and setup a middleware to call the import, 'session()'. 'session' takes a single object as an argument with a 'secret' key mapped to whatever string you want.
    - Setup 'passport.serializeUser()' in the server file. This function takes serialized user data out of the session log to be used by the application. The method takes a function with the 'user' object, and the callback function 'done' as arguments. In this case, all this function will do is call 'done' with null (as in no server errors), and the user object as arguments.
    - Conversely, setup 'passport.deserializeUser()' in the server file. This function puts the application user data back into the session log, and is setup the exact same way as the serialize function.

2. Setup the correct passport strategy
    - Passport itself is only the core, and needs a specific strategy to work with certian providers. These can be found on NPM, follow their documentation to set them up correctly, Set them up in the server file for now.

3. Setup routes to authenticate users
    - Routes can be setup on the server file. Passport needs two routes to go through its authentication; one route to the login page, and one route to handle to login info put into that page.
    - Both routes should be GET routes, and their callback functions should be a 'passport.authenticate()' call. The data that goes into the authenticate calls vary by strategy
