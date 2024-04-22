const { Post } = require('../models');

const postData = [
  {
    title: "New Programming Language Released!",
    post_content: "A new programming language has been released that promises to revolutionize software development. It's called SuperCode and it's designed to be easy to learn, write, and read, while still being powerful and efficient.",
    user_id: 1,
    post_id: 1
  },
  {
    title: "AI Technology Advancements",
    post_content: "Recent advancements in AI technology are paving the way for more intelligent and autonomous systems. These systems are expected to have a wide range of applications, from self-driving cars to advanced data analysis.",
    user_id: 2,
    post_id: 2
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;