var net = require('net');
function makeRequest(addr, req, f) {
    var client = new net.Socket();
    var finalData = "";
    client.connect(80, addr, function () {
        return client.write(req);
    });
    client.on("data", function (data) {
        finalData += data.toString();
    });
    client.on('close', function () {
        f(finalData);
    });
}


//The following string *MUST* end with 2 newlines
var http_request =
    `GET /index.html HTTP/1.1
host: www.dolekemp96.com
Connection: close

`;

// IGNORE EVERYTHING BEFORE THIS LINE

function process(httpResponse) {
  //console.log(httpResponse.indexOf("Content-Length:")+15)

  //console.log(httpResponse.length)
console.log(httpResponse.substring(httpResponse.indexOf("Content-Length:")+16,httpResponse.indexOf("Content-Length:")+20))
}

makeRequest("www.dolekemp96.org", http_request, process);