//imports
import fastify from "./app";

const PORT = Number(process.env.SERVER_PORT) || 3001;

fastify.listen({ port: PORT}, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});
