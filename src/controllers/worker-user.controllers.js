import { connect } from '../database';
const tableName = 'WorkerUser';
//Obtener todos los trabajadores
export const getWorkers = async (req, res) => {
	try {
		const connection = await connect();
		const [row] = await connection.query(`SELECT * FROM ${tableName}`);
		res.json(row);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//obtener un trabajador por id
export const getWorker = async (req, res) => {
	try {
		const connection = await connect();

		const [row] = await connection.query(
			`SELECT * FROM ${tableName} WHERE id=?`,
			[req.params.id]
		);
		res.json(row[0]);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//obtener la cantidad de trabajadores
export const getWorkersCount = async (req, res) => {
	try {
		const connection = await connect();
		const [row] = await connection.query(
			`SELECT COUNT(*) FROM ${tableName}`
		);
		res.json(row[0]['COUNT(*)']);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//guardar un trabajador  POST request
export const saveWorker = async (req, res) => {
	res.send('Hello world');
};

//borrar un trabajador DELETE request
export const deleteWorker = async (req, res) => {
	try {
		const connection = await connect();
		const result = await connection.query(
			`DELETE FROM ${tableName} WHERE id=?`,
			[req.params.id]
		);
		res.sendStatus(204);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//actualiza datos de un trabajador mediante un id
export const updateWorker = async (req, res) => {
	try {
		const connection = await connect();
		const result = await connection.query(
			`UPDATE ${tableName} SET ? WHERE id=?`,
			[req.body, req.params.id]
		);
		res.sendStatus(204);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};
