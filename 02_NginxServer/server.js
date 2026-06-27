const http = require("http");
const fs = require("fs");
const path = require("path"); // anything related to path [extension, file ... etc]

const port = 3000; // make sure port is not working for anything

// const server = http.createServer()  // always listening port
// we can also provide it a functionality
const server = http.createServer((req, res) => {
  // __dirname = access to current directory
  const filepath = path.join(
    __dirname,
    req.url === "/" ? "index.html" : req.url,
  );
  // if filepath == '/' send user to index.html otherwise send to whatever user is trying to reach

  // extname = gives us extension (like .html, .js ... etc)
  const extName = String(path.extname(filepath)).toLowerCase();

  // we have to tell server what type of files we want to support [it is optional]
  const mimeTypes = {
    ".html": "text/html",
    ".css": "text/css",
    ".js": "text/javascript",
    ".png": "image/png",
    // some server doesn't support .jpg or .jpeg extension of image, now we know why
  };

  // "application/octet-stream" = generic binary file
  const contentType = mimeTypes[extName] || "application/octet-stream";

  // We have grab all the thing we need now we do operation

  // Convention for port ---
  // 1. Informational responses (100 – 199)
  // 2. Successful responses (200 – 299)
  // 3. Redirection messages (300 – 399)
  // 4. Client error responses (400 – 499)
  // 5. Server error responses (500 – 599)

  fs.readFile(filepath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("404: File na Mili !!")
      }
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
});

server.listen(port, () => {
  console.log(`server is listening on ${port} port`);
});
