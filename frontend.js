const axios = require('axios');
const token = process.env.PAGE_TOKEN;

async function send_messages(recipient_id, response) {
    // Construct the message body
    await axios({
        method: 'post',
        url: "https://graph.facebook.com/v10.0/me/messages",
        params: {access_token: token},
        data: {
            // metadata: "lmao",
            recipient: {id: recipient_id},
            message: response
        }
    })
        .then(function () {
            console.log("sent!");
        }).catch(function (error, response) {
            if (error) {
                console.log("not sent because of axios!");
                console.log(error);
            } else if (response.body.error) {
                console.log("sent, but invalid?")
                console.log(response.body.error);
            }
        });
}

async function send_text(recipient_id, text) {
    await send_messages(recipient_id, {text})
}

module.exports = {
    send_text
}