let passwords = ['abcd123', 'xyz987', '123987abcd'];
const generator = Math.floor(Math.random() * passwords.length);

console.log(passwords[generator]);