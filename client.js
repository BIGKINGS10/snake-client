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

    conn.on('connect', () => {
        console.log('Successfully connected to game server');
        conn.write('Name: OSO');
        // conn.write('Move: up');
        // conn.write('Move: right');

        
        
      });
    
  
    return conn;
  };

  module.exports = connect