import { Router, Application } from 'express';
import MediaController from './controllers/media';
import CategoryController from './controllers/category';

const setRoutes = (app: Application): void => {
  const router = Router();
  const mediaController = new MediaController();
  const categoryController = new CategoryController();

  // Media
  router.route('/landingImages').get(mediaController.getAll);
  // Categories
  router.route('/getAllCategories').get(categoryController.getAll);

  // Apply routes to app
  app.use('/api', router);
};

export default setRoutes;
