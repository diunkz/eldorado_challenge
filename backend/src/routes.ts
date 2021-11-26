import express from 'express';
import LibraryController from './controllers/LibraryController';

const router = express.Router();

router.post('/library', LibraryController.create);
router.get('/library', LibraryController.findAll);
router.get('/library/:isbn', LibraryController.findOne);
router.put('/library/:isbn', LibraryController.update);
router.delete('/library/:isbn', LibraryController.destroy);

export { router };