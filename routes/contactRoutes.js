import express from 'express';
const router = express.Router();
import { getMessages, sendMessage } from '../controllers/Message.js';

router.route('/sendmessage').post(sendMessage);
router.route('/getmessage').get(getMessages);


export default router;