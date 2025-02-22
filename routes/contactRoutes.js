const express = require("express");
const Message = require("../models/Message");

const router = express.Router();

// ✅ API to Fetch All Messages
router.get("/getmessages", async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: "❌ Error fetching messages", details: error.message });
  }
});

// ✅ API to Send a Message
router.post("/sendmessage", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "❌ Name, email, and message are required" });
    }

    const newMessage = new Message({ name, email, message });
    await newMessage.save();

    res.json({ success: true, message: "✅ Message sent successfully!", data: newMessage });
  } catch (error) {
    res.status(500).json({ error: "❌ Error sending message", details: error.message });
  }
});

module.exports = router;
