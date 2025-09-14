const arguMents = process.argv.slice(2);
const firstArg = parseInt(arguMents[0]);

if(isNaN(firstArg)){
    console.log("Not a number ");
}
else{
    console.log("My number: ", firstArg);
}

