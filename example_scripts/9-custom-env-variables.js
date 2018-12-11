/** val1=10 val2=20 node 9-custom-env-variables.js
 * 
 * or
 * 
 * export val1=100
 * export val2=200
 * node 9-custom-env-variables.js
 * 
 */

console.log('current user is', process.env.username);

console.log('\nScript executed with:');

console.log('val1 equals to:', process.env.val1);
console.log('val2 equals to:', process.env.val2);