import express from 'express';
import bookingsRoutes from './routes/bookings.routes';

const app = express();
app.use(express.json());
app.use(bookingsRoutes);
export default app;
