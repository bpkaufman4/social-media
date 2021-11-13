const router = require('express').Router();
const { getAllThoughts, getThoughtById, updateThought, createThought, deleteThought, addReaction, removeReaction } = require('../../controllers/thought-controller');

router.route('/:userId').post(createThought); // works

router.route('/:userId/:thoughtId').put(addReaction).delete(deleteThought); // works

router.route('/reaction/:thoughtId/:reactionId').put(removeReaction); // works

router.route('/:thoughtId').get(getThoughtById).put(updateThought); //works

router.route('/').get(getAllThoughts); // works

module.exports = router;