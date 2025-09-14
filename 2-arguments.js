const arguMents = process.argv.slice(2);

if(arguMents.length === 0){
    console.log("No argument");
}
else if(arguMents.length === 1){
    console.log("Argument found");
}else{
    console.log("Arguments found");
}
