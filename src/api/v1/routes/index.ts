import express from 'express'; 
import { AuthRouter } from '../compoments/Auth/router';
import { UserRouter } from '../compoments/User/router';
import { GoogleRouter } from '../compoments/Login/Google/router';
import { FacebookRouter } from '../compoments/Login/Facebook/router';
import { GithubbRouter } from '../compoments/Login/Github/router';
export const routes = express.Router();
routes.use(AuthRouter)
routes.use(UserRouter)
// login router
routes.use(GoogleRouter)
routes.use(FacebookRouter)
routes.use(GithubbRouter)