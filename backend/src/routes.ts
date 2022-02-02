import { Router } from 'express';
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController';
import { CreateParticipantController } from './controllers/CreateParticipantController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const authenticateAdminController = new AuthenticateAdminController();
const createParticipantController = new CreateParticipantController();

const routes = Router();

routes.post('/auth', authenticateAdminController.handle);

routes.post('/participant/create',
  ensureAuthenticated,
  ensureAdmin,
  createParticipantController.handle
);

export { routes };
