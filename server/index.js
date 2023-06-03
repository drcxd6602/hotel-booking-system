import { createServer } from "http";
const server = createServer((req, res) => {
  console.log("Server is created");
  res.end("Hello");
});

server.listen(5000, () => {
  console.log("server is running");
});
