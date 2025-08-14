# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── yarn.lock            # Dependency version lock file
├── Dockerfile           # Instructions to build the Docker image
└── README.md            # Project documentation
```

## Getting Started

### Prerequisites

- Node.js and Yarn should be installed on your machine.

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/microsoft/vscode-remote-try-node.git
   cd simple-express-server
   ```

2. Install the dependencies:

   ```
   yarn install
   ```

### Running the Server

To start the server with Nodemon, run:

```
yarn start
```

The server will listen on port 8001.

### Building the Docker Image

To build the Docker image, run:

```
docker build -t simple-express-server .
```

### Running the Docker Container

To run the Docker container, use:

```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.