# Simple Express Server

This project is a simple Express server that listens on port 8001. It is set up to automatically restart using Nodemon whenever changes are made to the code.

## Project Structure

```
simple-express-server
├── src
│   └── server.js        # Entry point of the application
├── package.json         # Configuration file for npm
├── yarn.lock            # Yarn lock file for dependency versions
├── Dockerfile           # Dockerfile to build the application image
└── README.md            # Project documentation
```

## Getting Started

To run the server, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd simple-express-server
   ```

2. **Install dependencies:**
   ```bash
   yarn install
   ```

3. **Start the server:**
   ```bash
   yarn start
   ```

The server will be running on `http://localhost:8001`.

## Docker

To run the application in a Docker container, you can build the Docker image and run it with the following commands:

1. **Build the Docker image:**
   ```bash
   docker build -t simple-express-server .
   ```

2. **Run the Docker container:**
   ```bash
   docker run -p 8001:8001 simple-express-server
   ```

The server will be accessible at `http://localhost:8001` from your host machine.

## License

This project is licensed under the MIT License.