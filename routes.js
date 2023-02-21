const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Form</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    return res.write("</html>");
  }

  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
      // res.statusCode = 302;
      // res.setHeader("Location", "/");
      // return res.end();
    });
  }
};

// const server = http.createServer((req, res) => {
//   // console.log(req.url, req.method, req);
//   // process.exit()
//   const url = req.url;
//   const method = req.method;

//   // res.setHeader("Content-Type", "text/html");
//   // res.write("<html>");
//   // res.write("<head><title>My Page</title></head>");
//   // res.write("<body><h1> Hello World </h1></body>");
//   // res.write("</html>");
//   // return res.end();
// });

// module.exports = requestHandler;

// module.exports = {
//   handler: requestHandler,
//   text: "Hello World",
// };

// module.exports.handler = requestHandler;
// module.exports.text = "Hello World";

exports.handler = requestHandler;
exports.text = "Hello World";
