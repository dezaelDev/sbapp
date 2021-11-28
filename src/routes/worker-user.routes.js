import { Router } from 'express';
import {
	deleteWorker,
	getWorker,
	getWorkers,
	getWorkersCount,
	saveWorker,
	updateWorker,
} from '../controllers/worker-user.controllers';

const router = Router();

/**
 * @swagger
 *
 * tags:
 *  name: Workers
 *  description: workers endpoint
 */

/**
 * @swagger
 * /workers:
 *  get:
 *    summary: Get all Workers
 *    tags: [Workers]
 */
router.get('/workers', getWorkers);

/**
 * @swagger
 * /workers/count:
 *  get:
 *    summary: get total workers counter
 *    tags: [Workers]
 */
router.get('/workers/count', getWorkersCount);

/**
 * @swagger
 * /workers/{id}:
 *  get:
 *    summary: Get worker by Id
 *    tags: [Workers]
 */
router.get('/workers/:id', getWorker);

/**
 * @swagger
 * /workers:
 *  post:
 *    summary: save a new worker
 *    tags: [Workers]
 */
router.post('/workers', saveWorker);

/**
 * @swagger
 * /workers/{id}:
 *  delete:
 *    summary: delete a worker by Id
 *    tags: [Workers]
 */
router.delete('/workers/:id', deleteWorker);

/**
 * @swagger
 * /workers/{id}:
 *  put:
 *    summary: update a worker by Id
 *    tags: [Workers]
 */
router.put('/workers/:id', updateWorker);

export default router;
