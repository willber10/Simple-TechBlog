
const router = require('express').Router(); 
const { Comment } = require('../../models'); 
const withAuth = require('../../utils/auth'); 


const handleError = (err, res, statusCode = 500) => {
  console.log(err); 
  res.status(statusCode).json(err);
};

router.get('/', (req, res) => {
    Comment.findAll({})
      .then(dbCommentData => res.json(dbCommentData)) 
      .catch(err => handleError(err, res)); 
});

router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      user_id: req.session.user_id,
    })
      .then(dbCommentData => res.json(dbCommentData)) 
      .catch(err => handleError(err, res, 400)); 
  }
});

router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
        where: {
          id: req.params.id
        }
      })
        .then(dbCommentData => {
          if (!dbCommentData) {
            res.status(404).json({ message: 'No comment found with this id' }); 
            return;
          }
          res.json(dbCommentData); 
        })
        .catch(err => handleError(err, res)); 
});

module.exports = router;