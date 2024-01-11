// // const http = require("http");

// // const server = http.createServer((req, res) => {
// //   res.writeHead(200, { "Content-Type": "text/plain" });
// //   res.end("Hello, World!");
// // });

// // const Port = 3000;
// // server.listen(Port, () => {
// //   console.log(`Server running at http://localhost:${Port}/`);
// // });

// // const http = require("http");

// // class MyFirstClassSever {
// //   constructor(port) {
// //     this.port = port;
// //     this.server = http.createServer(this.handleRequest.bind(this));
// //   }

// //   handleRequest(req, res) {
// //     res.writeHead(200, { "Content-Type": "application/json" });

// //     const responseData = {
// //       message: "Salom from Jamshid",
// //     };
// //     res.end(JSON.stringify(responseData));
// //   }
// //   start() {
// //     this.server.listen(this.port, () => {
// //       console.log(`Sever running at http://localhost${this.port}/}`);
// //     });
// //   }
// //   stop() {
// //     this.server.close(() => {
// //       console.log("Server stopped.");
// //     });
// //   }
// // }

// // const serverInstance = new MyFirstClassSever(3000);
// // serverInstance.start();

// const http = require("http");
// const url = require("url");

// let data = [
//   { id: 1, name: "Item 1" },
//   { id: 2, name: "Item 2" },
//   { id: 3, name: "Item 3" },
// ];

// const server = http.createServer((req, res) => {
//   const { method, url: reqUrl } = req;
//   const { pathname } = url.parse(reqUrl, true);

//   if (method === "GET" && pathname === "/items") {
//     res.setHeader("Content-Type", "application/json");
//     res.end(JSON.stringify(data));
//   }
//   if (method === "GET" && pathname.startsWith("/items/")) {
//     const itemId = parseInt(pathname.substring(7));
//     const item = data.find((item) => item.id === itemId);

//     if (item) {
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify(item));
//     } else {
//       res.writeHead(404);
//       res.end(JSON.stringify({ error: "Item not found" }));
//     }
//   }
//   if (method === "POST" && pathname === "/items") {
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const newItem = JSON.parse(body);
//       newItem.id = data.length + 1;

//       data.push(newItem);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(newItem));
//     });
//   }
//   if (method === "PUT" && pathname.startsWith("/items/")) {
//     const itemId = parseInt(pathname.substring(7));
//     let body = "";

//     req.on("data", (chunk) => {
//       body += chunk;
//     });

//     req.on("end", () => {
//       const updatedItem = JSON.parse(body);
//       const index = data.findIndex((item) => item.id === itemId);

//       if (index !== -1) {
//         data[index] = { ...data[index], ...updatedItem };
//         res.writeHead(200, { "Content-Type": "application/json" });
//         res.end(JSON.stringify(data[index]));
//       } else {
//         res.writeHead(404);
//         res.end(JSON.stringify({ error: "Item not found" }));
//       }
//     });
//   }
//   if (method === "DELETE" && pathname.startsWith("/items/")) {
//     const itemId = parseInt(pathname.substring(7));

//     data = data.filter((item) => item.id !== itemId);

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify({ message: "Item deleted successfully" }));
//   }
// });

// const PORT = 3000;
// server.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
// app.js
const crudOperations = require("./crud");

// Example usage
console.log(crudOperations.getAllUsers());

const newUser = { name: "New User" };
crudOperations.addUser(newUser);
console.log(crudOperations.getAllUsers());

const updatedUser = { name: "Updated User" };
crudOperations.updateUser(1, updatedUser);
console.log(crudOperations.getAllUsers());

crudOperations.deleteUser(1);
console.log(crudOperations.getAllUsers());
