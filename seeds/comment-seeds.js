const { Comment } = require('../models');

const commentData = [
  {
    user_id: 1,
    post_id: 2,
    comment_text: "This is a great resource, thanks for sharing!"
  },
  {
    user_id: 2,
    post_id: 1,
    comment_text: "I found this very helpful, thank you!"
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;