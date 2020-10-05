const { EventEmitter } = require("events")
const event = new EventEmitter();

event.on("data", (data) => {
    console.log(`data ${data}`)
});

event.on("data", (data) => {
    console.log(`data lagi ${data}`)
}
)
module.exports = event
