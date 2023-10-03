
import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import dotenv from 'dotenv';

dotenv.config();


// Cấu hình Passport-Facebook Strategy
passport.use(new FacebookStrategy({
  clientID: process.env.YOUR_FACEBOOK_APP_ID as string,
  clientSecret: process.env.YOUR_FACEBOOK_APP_SECRET as string,
  callbackURL: 'http://localhost:8000/auth/facebook/callback'
},
function(accessToken, refreshToken, profile, done) {
  // Xử lý xác thực ở đây và gọi done() khi xác thực thành công
  return done(null, profile);
}));

