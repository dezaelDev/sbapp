import { Router } from 'express';
import {
	deleteClient,
	getClient,
	getClientByEmail,
	getClients,
	getClientsCount,
	saveClient,
	updateClient,
} from '../controllers/client-user.controllers';

const router = Router();

/**
 * @swagger
 *
 * tags:
 *  name: Clients
 *  description: clients endpoint
 */

/**
 * @swagger
 * /clients:
 *  get:
 *    summary: Get all Clients
 *    tags: [Clients]
 */
router.get('/clients', getClients);

/**
 * @swagger
 * /clients/count:
 *  get:
 *    summary: get total clients counter
 *    tags: [Clients]
 */
router.get('/clients/count', getClientsCount);

/**
 * @swagger
 * /clients/{id}:
 *  get:
 *    summary: Get client by Id
 *    tags: [Clients]
 */
router.get('/clients/:id', getClient);

/**
 * @swagger
 * /clients/{email}:
 *  get:
 *    summary: Get client by email
 *    tags: [Clients]
 */
router.get('/clients/:email', getClientByEmail);

/**
 * @swagger
 * /clients:
 *  post:
 *    summary: save a new client
 *    tags: [Clients]
 */
router.post('/clients', saveClient);

/**
 * @swagger
 * /clients/{id}:
 *  delete:
 *    summary: delete a client by Id
 *    tags: [Clients]
 */
router.delete('/clients/:id', deleteClient);

/**
 * @swagger
 * /clients/{id}:
 *  put:
 *    summary: update a client by Id
 *    tags: [Clients]
 */
router.put('/clients/:id', updateClient);

export default router;
