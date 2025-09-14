const arguMents = process.argv.slice(2);
const x = parseInt(arguMents[0]);

if (isNaN(x)){
    console.log("Missing size");
}
else{
    for (let i=0; i<x; i++){
        console.log("X".repeat(x));
    }
}
