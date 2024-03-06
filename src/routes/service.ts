import { Router } from 'express';
import { getTickets } from '../controllers/service';

export const serviceRoute = Router();

serviceRoute.get('/tickets', getTickets);
