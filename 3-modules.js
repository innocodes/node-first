// CommonJS, every file is module (by default);
// Modules - Encapsulated Code (only share minimum)

/* When you import a module, you actually invoke
   it
  
*/

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors');
require('./7-mind-grenade')
const {john, peter} = names

sayHi('susan');
sayHi(john)
sayHi(peter);



