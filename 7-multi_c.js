const arguMents = process.argv.slice(2);
const x = parseInt(arguMents[0]);

if (isNaN(x)){
    console.log("Missing number of occurrences"); 
}
else{
    for (let i=0; i<x; i++){
        console.log("C is fun");
    }
}
/*for (let i=0; i<arguMents.length; i++){
    if(isNaN(firstArg)){
       console.log("Missing number of occurrences"); 
    }
    else{
        console.log("C is fun");
    }
}*/