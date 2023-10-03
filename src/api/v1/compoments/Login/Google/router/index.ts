import passport from 'passport'
import { Router } from 'express'
import { ensureAuthenticated } from '../../../../middlewares'

export const GoogleRouter = Router()

GoogleRouter.get('/auth/google', passport.authenticate('google', { scope: ['email', 'profile'] }))

// GoogleRouter.get( '/auth/google/callback',
// passport.authenticate( 'google', {
//     successRedirect: '/auth/google/success',
//     failureRedirect: '/auth/google/failure'
// }));
GoogleRouter.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/auth/google/failure' }),
  function (req, res) {
    // Successful authentication, redirect success.
    res.redirect('/auth/google/success')
  }
)

GoogleRouter.get('/auth/google/success',ensureAuthenticated, (req, res) => {
  res.send('succes login google')
})
GoogleRouter.get('/auth/google/failure', (req, res) => {
  res.send('Failure login google')
})
