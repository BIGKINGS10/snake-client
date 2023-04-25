const connect = function () {
    const conn = net.createConnection({
      host: "165.227.47.243",
      port: 50541
    });
  
    // interpret incoming data as text
    conn.setEncoding("utf8");
  
    conn.on("connect", () => {
      // code that does something when the connection is first established
    });
  
    return conn;
  };

  module.exports = connect