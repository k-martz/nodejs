**NODE.JS**

Node.js(2009) is an open-source, cross-platform  JavaScript(1995) (asynchronous event-driven) runtime environment that executes JavaScript code outside of a web browser. It allows developers to use JavaScript for server-side scripting, enabling them to build scalable and high-performance network applications. Node.js is built on the V8 JavaScript runtime engine.

**EXAMPLE**

- BROWSER SENDS REQUEST TO SERVER(NODEJS) TO HAVE A HTML
- SERVER SENDS A RESPONSE WITH THE HTML FILE

&nbsp;

**NVM (node version manager used for different versions)**

node -v : gives node version  
nvm install xx.xx.xx : installs specific version of node.js  
nvm use xx.xx.xx : use specific version of node.js

**REPL (Read Evaluate Print Loop)**

It is a programming language environment (basically a console window) that takes single expression as user input and returns the result back to the console after execution of node.js

**node index.js** or **node .** : runs the app from terminal

Global variables

Global  variables can be declared with a value, and which can be accessed anywhere in a program. The scope of global variables is not limited to the function scope or any particular JavaScript file (using require and the file that are declared). It can be declared in one place and then used in multiple places.

**Common Global Objects in Node.js**

global (using inside a module and inside other files with the usage of require)

process (inbuilt global object in NodeJS)

////////////////////////////////////////////////////////////////////////////////////////////////////////

```node.js
process.on('exit', function(){ sample function })
```

(this function does something during on exit)

the **process** object in Node.js is a **global object** that can be accessed inside any module without requiring it.

'exit' : Event emitters (transmit events) are objects in Node. js that trigger an event by sending a message to signal that an action was completed

function() : callback is a non-blocking function They're called when the function that contains the callback as an argument completes its execution, and allows the code in the callback to run in the meantime. Callbacks help us make asynchronous calls. we say it callback because isn't called the first time node.js sees it is only called after the exit event occurs at some point on the future.

////////////////////////////////////////////////////////////////////////////////////////////////////////

**Customs callbacks**

This method is used when we have something running and is cpu intensive

```node.js
const { EventEmitter }=require( 'events');  
const eventEmitter=new EventEmitter();  
eventEmitter.on( 'lunch' ,()=>{  
console. log( 'yum ')})
eventEmitter.emit('lunch');
```

////////////////////////////////////////////////////////////////////////////////////////////////////////

when we see sync===blocking (strictly equal)

```node.js
const { readFile, readFileSync }=require( 'fs');
const txt= readFileSync('./hello.txt' ,'utf8');  
console. log(txt);  
console.log('do this ASAP')
```

--------

prints first what is inside the txt file (no matter how it longs it takes)

and then "do this ASAP"

////////////////////////////////////////////////////////////////////////////////////////////////////////

```node.js
readFile('./hello.txt','utf8',(err,txt) =>{
console.log(txt)
});  
console.log( 'do this ASAP')
```

--------

the do this ASAP message comes first, but node.js registers the callback executes the script and finally runs the callback when the file has been read.

&nbsp;prints first "do this ASAP" and second what is inside the txt file

**The Promises solution** (asynchronous and non-blocking)

```node.js
const { readFile } =require( 'fs').promises;  
async function hello() {  
const file=await readFile(' ./hello.txt', 'utf8');}
```

&nbsp;

&nbsp;

Commands:  
npm : node package manager  
npm init -y : produces the package. json file  
npm install express (express is a module) : installs express module and an entry added in package.json file as dependency

Syntax

console.log(“hello world”);  
global.varx = ‘13’;  
console.log(global.varx);  
process.on(‘exit’, function(){ sample function }) (this function does something during on exit)  
const express = require( ' express' ) ; (adding a module inside a file so we can use it)
