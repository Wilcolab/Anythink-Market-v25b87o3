# Node.js Express Server

This project is a simple Node.js application using Express. It serves as a basic template for building web applications.

## Project Structure

```
node-server
├── Dockerfile
├── package.json
├── index.js
└── README.md
```

## Getting Started

To build and run this application using Docker, follow these steps:

1. **Build the Docker Image**

   Run the following command in the terminal:

   ```
   docker build -t node-server .
   ```

2. **Run the Docker Container**

   After building the image, you can run the container with the following command:

   ```
   docker run -p 5000:5000 node-server
   ```

3. **Access the Application**

   Open your browser and navigate to `http://localhost:5000`. You should see the message "Hello World".

## Dependencies

This project uses the following dependencies:

- **Express**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.