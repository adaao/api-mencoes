const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentiosnController = require('../controllers/mentions-controller');

router.get('/', mentiosnController.listMentions);
router.post('/', [
   check('friend').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres"),
   check('mention').isLength({ min: 20}).withMessage("A menção precisa ter no mínimo 20 e no máximo 280 caracteres.")
], mentiosnController.createMention);

module.exports = router;
