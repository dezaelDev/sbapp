import { Router } from 'express';
import {
	deleteBooking,
	getBooking,
	getBookings,
	getBookingsCount,
	saveBooking,
	updateBooking,
} from '../controllers/booking.controllers';
const router = Router();

/**
 * @swagger
 *
 * tags:
 *  name: Bookings
 *  description: bookings endpoint
 */

/**
 * @swagger
 * /bookings:
 *  get:
 *    summary: Get all Bookings
 *    tags: [Bookings]
 */
router.get('/bookings', getBookings);

/**
 * @swagger
 * /bookings/count:
 *  get:
 *    summary: get total bookings counter
 *    tags: [Bookings]
 */
router.get('/bookings/count', getBookingsCount);

/**
 * @swagger
 * /bookings/{id}:
 *  get:
 *    summary: Get booking by Id
 *    tags: [Bookings]
 */
router.get('/bookings/:id', getBooking);

/**
 * @swagger
 * /bookings:
 *  post:
 *    summary: save a new booking
 *    tags: [Bookings]
 */
router.post('/bookings', saveBooking);

/**
 * @swagger
 * /bookings/{id}:
 *  delete:
 *    summary: delete a booking by Id
 *    tags: [Bookings]
 */
router.delete('/bookings/:id', deleteBooking);

/**
 * @swagger
 * /bookings/{id}:
 *  put:
 *    summary: update a booking by Id
 *    tags: [Bookings]
 */
router.put('/bookings/:id', updateBooking);

export default router;
