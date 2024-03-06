import { Router } from 'express';
import { serviceRoute } from './service';

export const routes = Router();

routes.use('/service', serviceRoute);
