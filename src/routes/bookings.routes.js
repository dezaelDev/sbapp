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

//Obtener todas las reservas
router.get('/bookings', getBookings);

//Obtener la cantidad de reservas
router.get('/bookings/count', getBookingsCount);

//Obtener una reserva específica según su id
router.get('/bookings/:id', getBooking);

//insertar una nueva reserva
router.post('/bookings', saveBooking);

//borrar una nueva tarea
router.delete('/bookings/:id', deleteBooking);

//actualizar una tarea según su id
router.put('/bookings/:id', updateBooking);

export default router;
