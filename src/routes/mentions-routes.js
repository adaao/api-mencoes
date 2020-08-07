const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const mentiosnController = require('../controllers/mentions-controller');

router.get('/', mentiosnController.listMentions);

function validateFriendName(friendName){
   return check('friend').isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres");
}

function validateMention(mention){
   return check('mention').isLength({ min: 20, max: 280}).withMessage("A menção precisa ter no mínimo 20 e no máximo 280 caracteres.");
}

router.post('/', [
   validateFriendName('friend'),
   validateMention('mention')
], mentiosnController.createMention);

router.put('/:id', [
   check('friend').optional().isLength({ min: 7 }).withMessage("O nome precisa ter no mínimo 7 caracteres"),
   check('mention').optional().isLength({ min: 20}).withMessage("A menção precisa ter no mínimo 20 e no máximo 280 caracteres.")
], mentiosnController.updateMention);

router.delete('/:id', mentiosnController.deletMention);

module.exports = router;

