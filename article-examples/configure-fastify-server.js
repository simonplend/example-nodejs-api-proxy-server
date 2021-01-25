// src/server.js

import createFastifyServer from "fastify";

/**
 * Create a Fastify server instance with logging enabled.
 * Fastify uses the library `pino` for logging.
 *
 * @see https://www.fastify.io/docs/latest/Logging/
 * @see https://github.com/pinojs/pino/
 */
const fastify = createFastifyServer({
	logger: true,
});

try {
	/**
	 * Make use of top-level `await` i.e. outside of an `async` function.
	 *
	 * @see https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_top_level_await
	 */
	await fastify.listen(3000);
} catch (error) {
	fastify.log.error(error);
	process.exit(1);
}
