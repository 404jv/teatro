import { Router } from 'express';
import { AuthenticateAdminController } from './controllers/AuthenticateAdminController';
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

const routes = Router();

routes.post('/auth', authenticateAdminController.handle);

routes.get('/presentation', listPresentationsController.handle);

routes.use(ensureAuthenticated, ensureAdmin);
routes.post('/participant/create', createParticipantController.handle);
routes.get('/participant', listParticipantsController.handle);
routes.post('/presentation/create', createPresentationController.handle);

export { routes };
