// const events = require('events');
// const eventEmit = new events.EventEmitter();

// //crate event handler

// var myEventHandler = function () {
//     console.log('this event');

// }

// //give handler to event
// eventEmit.on('myEvent', myEventHandler);

// //call my event
// eventEmit.emit('myEvent');


const event = require("./test")
const aa = require("aa")

aa.readdir("./", (err, data) => {
    if (err) throw Error(err)
    event.emit("data", data)
})