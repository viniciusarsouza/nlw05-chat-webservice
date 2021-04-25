import express from 'express';

import './database';

const app = express();

app.get('/', (request, response) => {
	return response.json({
		message: 'ola nlw05',
	});
});

app.post('/', (request, response) => {});

app.listen(3333, () => console.log('Server running on port 3333'));
