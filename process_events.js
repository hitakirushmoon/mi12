// back = require('./backend');
front = require('./frontend');


async function handle(event){
    console.log(event)
    await front.send_text(event.sender.id, event.message.text)
}

module.exports = {
    handle,
}