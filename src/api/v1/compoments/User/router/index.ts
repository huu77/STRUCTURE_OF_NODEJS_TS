import { Router } from 'express';

export const UserRouter = Router();

UserRouter.get('/user', (req, res) => {
  res.send("User router ?!");
});