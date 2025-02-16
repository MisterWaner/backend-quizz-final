//imports
import Fastify from 'fastify';
import { config } from 'dotenv';

config();

const fastify = Fastify({ logger: true });

//Middlewares

//Routes
fastify.get('/', (request, reply) => {
    reply.send('API démarrée et fonctionnelle');
});

export default fastify;
