# Simple Express Server

This project is a simple Express server that listens on port 8001. It is designed to demonstrate the basic setup of an Express application with Docker support.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── yarn.lock            # Dependency lock file
├── Dockerfile           # Instructions to build the Docker image
└── README.md            # Project documentation
```

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your machine.

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

To run the server with automatic reload on changes, use the following command:

```
yarn start
```

The server will be available at `http://localhost:8001`.

### Building the Docker Image

To build the Docker image, run the following command in the project root:

```
docker build -t simple-express-server .
```

### Running the Docker Container

After building the image, you can run the container with:

```
docker run -p 8001:8001 simple-express-server
```

The server will be accessible at `http://localhost:8001`.

## License

This project is licensed under the MIT License.