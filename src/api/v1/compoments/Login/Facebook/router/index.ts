import passport from 'passport'
import { Router } from 'express'
import { ensureAuthenticated } from '../../../../middlewares'

export const FacebookRouter = Router()
// Định nghĩa tuyến đường xác thực Facebook
FacebookRouter.get('/auth/facebook', passport.authenticate('facebook'));

// Xử lý callback sau khi xác thực
FacebookRouter.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect: '/dashboard',
    failureRedirect: '/login',
  })
);
FacebookRouter.get('/dashboard',ensureAuthenticated,(req,res)=>{
res.send('this is doashboard')
})