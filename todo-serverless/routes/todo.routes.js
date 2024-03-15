const router = require('express').Router();
const todoController = require('../controllers/todos.controller');

router.get('/', todoController.list);
router.post('/', todoController.create);

module.exports = router;