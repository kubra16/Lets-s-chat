const mongoose = require("mongoose");

const MessageModel = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: string, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
  },

  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", MessageModel);

module.exports = Message;
