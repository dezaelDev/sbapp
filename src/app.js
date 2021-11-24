import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express';
import { options } from './swagger-options';

import bookingsRoutes from './routes/bookings.routes';

const app = express();
const specs = swaggerJSDoc(options);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));
app.use(bookingsRoutes);

export default app;
