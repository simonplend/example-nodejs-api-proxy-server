// src/server.js

import createFastifyServer from "fastify";
import fastifyHttpProxy from "fastify-http-proxy";

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

const CONFIG = {
	apiKey: process.env.API_KEY,
};

/**
 * Register and configure the `fastify-http-proxy` plugin.
 *
 * This plugin supports all the options of `fastify-reply-from`,
 * as well as a few additional options e.g. `upstream`.
 *
 * @see https://github.com/fastify/fastify-http-proxy#options
 * @see https://github.com/fastify/fastify-reply-from
 */
fastify.register(fastifyHttpProxy, {
	upstream: "http://localhost:8000",
	undici: true,
	/**
	 * Reply options to be passed through to `fastify-reply-from`,
	 * which `fastify-http-proxy` uses under the hood.
	 *
	 * @see https://github.com/fastify/fastify-http-proxy#replyoptions
	 */
	replyOptions: {
		/**
		 * @see https://github.com/fastify/fastify-reply-from#rewriterequestheadersoriginalreq-headers
		 */
		rewriteRequestHeaders: (originalRequest, headers) => {
			return {
				/**
				 * Preserve the existing request headers.
				 */
				...headers,
				/**
				 * Add the header which the API we're proxying requests
				 * to requires to authenticate the request.
				 */
				'X-Api-Key': CONFIG.apiKey,
			};
		},
	},
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
