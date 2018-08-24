import express from 'express';
import Controller from '../controllers/controller';
const router = express.Router();
// get all questions


router.get('/api/v1/questions', Controller.getAllquestions);
router.get('/api/v1/questions/:id', Controller.getquestion);
router.post('/api/v1/questions', Controller.createquestion);
router.put('/api/v1/questions/:id', Controller.updatequestion);
router.delete('/api/v1/questions/:id', Controller.deletequestion);

export default router;