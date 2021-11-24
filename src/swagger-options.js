export const options = {
	definition: {
		openapi: '3.0.0',
		info: {
			title: 'SBAPP API',
			version: '1.0.0',
			description: 'API para manejo de turnos en el SPA Sentirse Bien',
		},
	},
	apis: ['./src/routes/**/*.js'],
};
