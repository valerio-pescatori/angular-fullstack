import { Router, Application } from 'express';
import MediaController from './controllers/media';
import CategoryController from './controllers/category';
import BrandController from './controllers/brand';
import DropdownController from './controllers/dropdown';

const setRoutes = (app: Application): void => {
  const router = Router();
  const mediaController = new MediaController();
  const categoryController = new CategoryController();
  const brandController = new BrandController();
  const dropdownController = new DropdownController();
  // Media
  router.route('/landingImages').get(mediaController.getAll);
  // Categories
  router.route('/getAllCategories').get(categoryController.getAll);
  // Brands
  router.route('/getAllBrands').get(brandController.getAll);
  // Dropdown
  router.route('/getDropdown/:tab').get(dropdownController.get);

  // Apply routes to app
  app.use('/api', router);
};

export default setRoutes;
