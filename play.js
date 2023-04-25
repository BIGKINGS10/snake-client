const net = require("net");

// establishes a connection with the game server
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key);
  });

  return stdin;
};

const handleUserInput = function(key) {
 
};




console.log("Connecting ...");
connect();
