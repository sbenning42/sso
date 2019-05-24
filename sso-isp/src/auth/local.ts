import { PassportStatic } from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

export class LocalAuth {
    constructor(
        private passport: PassportStatic
    ) {
        passport.use(new LocalStrategy(
            function(username, password, done) {
              User.findOne({ username: username }, function (err, user) {
                if (err) { return done(err); }
                if (!user) { return done(null, false); }
                if (!user.verifyPassword(password)) { return done(null, false); }
                return done(null, user);
              });
            }
        ));
    }
}