
import passport from 'passport';
import { Strategy as GoogleOAuth2Strategy } from 'passport-google-oauth2';
import dotenv from 'dotenv';

dotenv.config();

// Cấu hình Google OAuth2 Strategy
passport.use(
  new GoogleOAuth2Strategy(
    {
      clientID: process.env.YOUR_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.YOUR_GOOGLE_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:8000/auth/google/callback',
    },
    (accessToken, refreshToken, profile, done) => {
      // Xử lý xác thực ở đây
      return done(null, profile);
    }
  )
);

// Serialize và Deserialize User
passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj:any, done) => {
  done(null, obj);
});

 