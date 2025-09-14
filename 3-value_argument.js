const arguMents = process.argv.slice(2);

if(arguMents[0] === undefined){
    console.log("No argument");
}
else{
    console.log(arguMents[0]);
}