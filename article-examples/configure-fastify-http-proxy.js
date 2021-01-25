// src/server.js

import fastifyHttpProxy from "fastify-http-proxy";

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
	upstream: "https://some-api.com",
	undici: true,
});
