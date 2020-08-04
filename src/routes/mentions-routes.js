const express = require('express');
const router = express.Router();
const mentiosnController = require('../controllers/mentions-controller');

router.get('/', mentiosnController.listMentions);
router.post('/', mentiosnController.createMention);

module.exports = router;
