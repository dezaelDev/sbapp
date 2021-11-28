import { connect } from '../database';
const tableName = 'ClientUser';
//Obtener todos los clientes
export const getClients = async (req, res) => {
	try {
		const connection = await connect();
		const [row] = await connection.query(`SELECT * FROM ${tableName}`);
		res.json(row);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//obtener un cliente por id
export const getClient = async (req, res) => {
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

export const getClientByEmail = async (req, res) => {
	try {
		const connection = await connect();

		const [row] = await connection.query(
			`SELECT * FROM ${tableName} WHERE email=?`,
			[req.params.email]
		);
		res.json(row[0]);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//obtener la cantidad de clientes
export const getClientsCount = async (req, res) => {
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

//guardar un cliente  POST request
export const saveClient = async (req, res) => {
	try {
		const username = req.body.name + '-' + req.body.dni;
		const creationDate = new Date().toISOString();
		const connection = await connect();
		const [results] = await connection.query(
			`INSERT INTO ${tableName}(username,email,telephone,dateOfBirth, creationDate, name,lastName,dni, gender) VALUES (?,?,?,?,?,?,?,?,?)`,
			[
				username,
				req.body.email,
				req.body.telephone,
				req.body.dateOfBirth,
				creationDate,
				req.body.name,
				req.body.lastName,
				req.body.dni,
				req.body.gender,
			]
		);

		const newUser = {
			id: results.insertId,
			username: username,
			creationDate: creationDate,
			...req.body,
		};

		res.json(newUser);
	} catch (error) {
		console.error(error);
		res.sendStatus(400);
	}
};

//borrar un cliente DELETE request
export const deleteClient = async (req, res) => {
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

//actualiza datos de un cliente mediante un id
export const updateClient = async (req, res) => {
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
