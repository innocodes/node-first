const os = require('os');
// console.log(os.version());

// info about current user
const user = os.userInfo();

// method returns the system's uptime in seconds
console.log(`Uptime: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
};

console.log(currentOS);
