import Message from '../models/Message.js'; // Assuming you have a Message model
import asyncHandler from 'express-async-handler'; // For handling async errors

// @desc    Send a contact message
// @route   POST /api/contact/sendmessage
// @access  Public
const sendMessage = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    res.status(400);
    throw new Error('Name, email, and message are required');
  }

  const newMessage = new Message({
    name,
    email,
    message,
  });

  const createdMessage = await newMessage.save();

  res.status(201).json({
    success: true,
    message: 'Message sent successfully!',
    data: createdMessage,
  });
});
const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find().sort({ createdAt: -1 }); // Latest messages first
  res.status(200).json({
    success: true,
    count: messages.length,
    data: messages,
  });
});

export { sendMessage,getMessages };