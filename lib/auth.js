const sha = require('sha.js');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models').User;

const config = require('../config');

// Configure the local strategy for use by Passport.
//
// The local strategy require a `verify` function which receives the credentials
// (`username` and `password`) submitted by the user.  Which MUST be the names
// of the fields in the req.body (and, therefore, HTML form) The function must verify
// that the password is correct and then invoke `cb` with a user object, which
// will be set at `req.user` in route handlers after authentication.
passport.use(new LocalStrategy(
    function(username, password, cb) {
        // hash our password
        let pwhash = sha('sha256').update(password).digest('hex').toUpperCase();
        // salt it
        let salthash = config.key+":"+pwhash;
        // hash the salt
        let authhash = sha('sha256').update(salthash).digest('hex').toUpperCase();

        console.log(authhash);
        new User({'name': username, 'auth': authhash})
            .fetch()
            .then(function(user) {
                if(user===null) {
                    return cb(null, false);
                } else {
                    return cb(null, user.attributes);
                }
            })
            .catch(function (err) {
                if (err) { return cb(err); }
            });
    }));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when
// serializing, and querying the user record by ID from the database when
// deserializing.
passport.serializeUser(function(user, cb) {
    cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
    new User({'id': id})
        .fetch()
        .then(function(user) {
            if(user===null) {
                console.log("returning false");
                cb(null, false);
            } else {
                cb(null, user.attributes);
            }
        })
        .catch(function (err) {
            if (err) { return cb(err); }
        });
});

module.exports = passport;