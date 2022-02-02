import { Router } from 'express';
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController';

const authenticateAdminController = new AuthenticateAdminController();

const routes = Router();

routes.post('/auth', authenticateAdminController.handle);

export { routes };
