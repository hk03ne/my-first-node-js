'use strict';
const number = process.argv[2] || 0;
let sum = 0;
for (let i = 1; i <= number; i++) {
  sum = sum + i;
}
console.log(sum);
//console.log(process.argv[0]);
// -> /home/komine/.nvm/versions/node/v10.14.2/bin/node
//console.log(process.argv[1]);
// -> /home/komine/workspace/my-first-node-js/app.js