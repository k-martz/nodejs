//run the above code to see what is happening
process.on('exit', function(){
    console.log('blah blah')
});

const { EventEmitter }=require( 'events');
const eventEmitter=new EventEmitter();
eventEmitter.on( 'lunch' ,()=>{
console. log( 'yum ')
})
eventEmitter.emit('lunch');

const { readFile, readFileSync }=require( 'fs');
const txt= readFileSync('./hello.txt' ,'utf8');
console. log(txt);
console.log('do this ASAP')