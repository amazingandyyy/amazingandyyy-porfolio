import express from 'express';
import middleware from './middleware';
const router = express.Router();
import { loginRequired } from './middleware';

import user from './modules/user/route';
import upload from './modules/upload';

router.get('/', function(req, res){ 
  res.send('You are connected to server-api');
});

router.use('/user', user);
router.use('/upload', loginRequired, upload);

export default router;