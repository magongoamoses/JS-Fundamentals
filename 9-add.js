const arguMents = process.argv.slice(2);
const a = parseInt(arguMents[0]);
const b = parseInt(arguMents[1]);

function add(a, b){
    return a + b;
}

console.log(add(a, b));