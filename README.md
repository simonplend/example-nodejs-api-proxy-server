# Example Node.js API proxy server

> This project contains an example proxy server which allows clients to make authenticated requests to an API.

## Article

This project was created as a companion to an article I've written about
creating a proxy server for API requests using Node.js:
[How to securely call an authenticated API from your front end](https://simonplend.com/how-to-securely-call-an-authenticated-api-from-your-front-end/)

## Frameworks & Libraries used

- [`fastify`](https://github.com/fastify/fastify) - "Fast and low overhead web framework, for Node.js"
- [`fastify-http-proxy`](https://github.com/fastify/fastify-http-proxy) - "Proxy your http requests to another server, with hooks."
- [`dotenv`](https://www.npmjs.com/package/dotenv) - "Dotenv is a zero-dependency module that loads environment variables from a .env file into `process.env`"

## Setup

```sh
npm install
```

Create an `.env` file for use in development:

```
API_KEY=abc123
```

The `.env` file will be automatically loaded by `dotenv` when you run
the example server (see below).

## Running the example server

```sh
npm start
```

## Development

If you want to test out making changes to the example proxy server,
I recommend installing [`nodemon`](https://nodemon.io/). It will watch for
any file changes you make and take care of restarting the server for you.

Once it is installed you can run it in your terminal:

```sh
nodemon
```
