import { Router } from 'express';
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController';
import { CreateAdminController } from './controllers/CreateAdminController';
import { CreateParticipantController } from './controllers/CreateParticipantController';
import { CreatePresentationController } from './controllers/CreatePresentationController';
import { ListParticipantsController } from './controllers/ListParticipantsController';
import { ListPresentationsController } from './controllers/ListPresentationsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const authenticateAdminController = new AuthenticateAdminController();
const createParticipantController = new CreateParticipantController();
const listParticipantsController = new ListParticipantsController();
const createPresentationController = new CreatePresentationController();
const listPresentationsController = new ListPresentationsController();
const createAdminController = new CreateAdminController();

const routes = Router();

routes.post('/auth', authenticateAdminController.handle);

routes.get('/presentation', listPresentationsController.handle);

routes.get('/participant', listParticipantsController.handle);

routes.use(ensureAuthenticated, ensureAdmin);

routes.post('/participant/create', createParticipantController.handle);
routes.post('/presentation/create', createPresentationController.handle);

routes.post('/admin/create', createAdminController.handle);

export { routes };
