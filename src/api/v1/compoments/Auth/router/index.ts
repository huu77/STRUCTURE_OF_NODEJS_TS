import { Router } from 'express';

export const AuthRouter = Router();

AuthRouter.get('/', (req, res) => {
  res.send("Auth router ?!");
});