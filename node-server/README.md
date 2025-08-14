# Simple Express Server

This is a minimal Express server that listens on port 8001. It uses nodemon for automatic restarts during development.

## Development

Install dependencies:

```
yarn install
```

Start the server with nodemon:

```
yarn start
```

## Docker

Build the Docker image:

```
docker build -t simple-express-server .
```

Run the container:

```
docker run -p 8001:8001 simple-express-server
```
