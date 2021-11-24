import { connect } from '../database';

//Obtener todas las reservas
export const getBookings = async (req, res) => {
	const connection = await connect();

	const [row] = await connection.query(`SELECT * FROM ReservedWork`);
	res.json(row);
};

//obtener una reserva por id
export const getBooking = async (req, res) => {
	const connection = await connect();

	const [row] = await connection.query(
		`SELECT * FROM ReservedWork WHERE id=?`,
		[req.params.id]
	);
	res.json(row[0]);
};

//obtener la cantidad de reservas
export const getBookingsCount = async (req, res) => {
	const connection = await connect();
	const [row] = await connection.query(`SELECT COUNT(*) FROM ReservedWork`);
	res.json(row[0]['COUNT(*)']);
};

//guardar una reserva POST request
export const saveBooking = async (req, res) => {
	res.send('Hello world');
};

//borrar una reserva DELETE request
export const deleteBooking = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'DELETE FROM ReservedWork WHERE id=?',
		[req.params.id]
	);
	res.sendStatus(204);
};

//actualiza una reserva
export const updateBooking = async (req, res) => {
	const connection = await connect();
	const result = await connection.query(
		'UPDATE ReservedWork SET ? WHERE id=?',
		[req.body, req.params.id]
	);
	console.log(result);
};
