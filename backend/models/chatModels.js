const mongoose = require('mongoose') 
const { chats } = require('../data')

const chatModel = mongoose.Schema(
 {
  chatName : {type : String , trim:true } ,
  isGroupChat : {type : Boolean , default : false}, 
  users : [{
   type:mongoose.Schema.Types.ObjectId , 
   ref:"User",
  }], 
  latestMessage : {
   type : mongoose.Schema.Types.ObjectId , 
   ref:"Message", 
  }, 
   groupAdmin : {
    type:mongoose.Schema.Types.ObjectId , 
   ref:"User",
   }
  }
 
)
const Chat = mongoose.model("Chat",chatModel)
process.setMaxListeners(0);
module.exports = Chat