// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/plain" });
//   res.end("Hello, World!");
// });

// const Port = 3000;
// server.listen(Port, () => {
//   console.log(`Server running at http://localhost:${Port}/`);
// });

const http = require("http");

class MyFirstClassSever {
  constructor(port) {
    this.port = port;
    this.server = http.createServer(this.handleRequest.bind(this));
  }

  handleRequest(req, res) {
    res.writeHead(200, { "Content-Type": "application/json" });

    const responseData = {
      message: "Salom from Jamshid",
    };
    res.end(JSON.stringify(responseData));
  }
  start() {
    this.server.listen(this.port, () => {
      console.log(`Sever running at http://localhost${this.port}/}`);
    });
  }
  stop() {
    this.server.close(() => {
      console.log("Server stopped.");
    });
  }
}

const serverInstance = new MyFirstClassSever(3000);
serverInstance.start();
