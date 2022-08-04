"use strict";

//server setup
const
http = require("http"),
fs = require("fs"),
fp = __dirname + "/public",
app = http.createServer(handler),
types = {
	"html": "text/html",
	"htm": "text/html",
	"shtml": "text/html",
	"css" : "text/css",
	"js"  : "text/javascript",
	"png" : "image/png",
	"ico" : "image/x-icon",
	"jpg" : "image/jpeg",
	"jpeg": "image/jpeg",
	"json": "application/json",
	"pdf" : "application/pdf",
	"rtf" : "application/rtf",
	"svg": "image/svg+xml"
};

console.log("STARTING SERVER");

function handler(req, res) {
	const ip = req.connection.remoteAddress;

	if (req.method === "GET") {
		if (req.url[req.url.length - 1] === "/") {
			req.url += "index.html";
			console.log(`\nCONNECTION from  ${ip}`);
		}

		const
		extension = req.url.split(".", 2)[1],
		file = fp + req.url;

		fs.readFile(file, function (err, data) {
			if (data) {
				const type = types[extension] || "text/plain";
				res.writeHead(200, {"Content-Type": type}); // ok
				res.write(data);
			} else {
				res.writeHead(404); // not found
				res.write("404\n\n");
				res.write(err.toString().replace(fp, "filepath"));
			}
			res.end();
		});
	}

	console.log(`${req.method} from  ${ip}  for  ${req.url}`);
}

app.listen(80);