const passport = require('passport');
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;


function initialize(passport, getUserByEmail, getUserById) {

    const authenticateUser = async (email, password, done) => {
      const user = await getUserByEmail(email)
      
      if(user[0] == null) {
        return done(null, false, { message: "Pas d'utilisateur avec cet email" })
      }

      try {
        const bool = await bcrypt.compare(password.trim(), user[0].password.trim())
        if(bool) {
          return done(null, user[0])
        } else {
          return done(null, false, { message: 'Mot de pas incorrect'})
        }
      } catch (err) {
        return done(err)
      }
    };
  
  passport.use(new LocalStrategy({ usernameField: 'email'}, authenticateUser))
  
  passport.serializeUser((user, done) => {
    done(null, user.userId);
  });
  
  passport.deserializeUser((id, done) => {
    const user = getUserById(id);
    done(null, user);
  });
}
  
module.exports = initialize