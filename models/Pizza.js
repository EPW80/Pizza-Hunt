const { Schema, model } = require('mongoose');


const CommentSchema = new Schema({
  writtenBy: {
    type: String
  },
  commentBody: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }, 
  comments: [
    {
      type: String,
      ref: 'Comment'
    }
  ]
});
const pizza = await Pizza.findOne()
pizza.commentCount // 5
// get total count of comments and replies on retrieval
PizzaSchema.virtual('commentCount').get(function() {
  return this.comments.length;
});

const Comment = model('Comment', CommentSchema);

module.exports = Comment;
