import express from 'express'; 
import { AuthRouter } from '../compoments/Auth/router';
import { UserRouter } from '../compoments/User/router';
import { GoogleRouter } from '../compoments/Login/Google/router';
export const routes = express.Router();
routes.use(AuthRouter)
routes.use(UserRouter)
routes.use(GoogleRouter)