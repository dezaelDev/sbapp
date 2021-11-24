import express from 'express';
import bookingsRoutes from './routes/bookings.routes';
import './database';
const app = express();
app.use(bookingsRoutes);
export default app;
