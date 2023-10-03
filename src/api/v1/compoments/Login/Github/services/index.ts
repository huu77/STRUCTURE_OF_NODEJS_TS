
import passport from 'passport'
import { Strategy as GitHubStrategy } from 'passport-github2'
import dotenv from 'dotenv';

dotenv.config();
// Cấu hình Passport.js
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.YOUR_GITHUB_CLIENT_ID as string,
      clientSecret: process.env.YOUR_GITHUB_CLIENT_SECRET as string,
      callbackURL: 'http://localhost:8000/auth/github/callback'
    },
    (accessToken: any, refreshToken: any, profile: any, done: (arg0: any, arg1: any) => any) => {
      // Xử lý xác thực ở đây và gọi done() khi xác thực thành công
      return done(null, profile)
    }
  )
)

// Serialize và Deserialize User
passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user: any, done) => {
  done(null, user)
})
