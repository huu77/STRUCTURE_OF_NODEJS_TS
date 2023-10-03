import passport from 'passport'
import { Router } from 'express'
import { ensureAuthenticated } from '../../../../middlewares'

export const GithubbRouter = Router()
GithubbRouter.get('/auth/github', passport.authenticate('github', { scope: ['user:email'] }));
GithubbRouter.get(
  '/auth/github/callback',
  passport.authenticate('github', { successRedirect: '/home', failureRedirect: '/login' })
);
GithubbRouter.get('/home',ensureAuthenticated,(req,res)=>{
res.send('login with github')
})

