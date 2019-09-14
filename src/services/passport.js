const passport = require("passport");
const mongoose = require("mongoose");
const User = mongoose.model("users");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { googleClientID, googleClientSecret } = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const userProfile = await User.findById(id);
  done(null, userProfile);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: googleClientID,
      clientSecret: googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      // getting data from the profile
      const { sub, given_name, family_name, picture, email } = profile._json;

      // searching for existing GoogleID at MongoDB
      const existingUser = await User.findOne({ googleId: profile.id });

      if (existingUser) {
        console.log("User is: " + existingUser);
        done(null, existingUser);
      } else {
        // recording new registry at mongodb
        const userCreated = await new User({
          googleId: sub,
          nome: given_name,
          sobrenome: family_name,
          email,
          picture
        }).save();

        console.log("User created: " + userCreated);
        done(null, userCreated);
      }
    }
  )
);
