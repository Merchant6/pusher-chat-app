import axios from 'axios';
import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();

const message_el = document.getElementById("messages");
const username_input = document.getElementById("username");
const message_input = document.getElementById("message_input");
const message_form = document.getElementById("message_form");

message_form.addEventListener('submit', function(e){
    e.preventDefault();

    console.log(username_input.value)
    let has_errors = false;

    if(username_input.value == '')
    {
        alert('Please enter your username');
        has_errors = true;
    }

    if(message_input.value == '')
    {
        alert('Please enter your message');
        has_errors = true;
    }

    if(has_errors)
    {
        return;
    }

    const options = {
        method: 'post',
        url: '/send-message',
        data: {
            username: username_input.value,
            message: message_input.value
        }
    }

    axios(options);
});

window.Echo.channel('chat')
        .listen('.message', (e) => {
            console.log(e);
            message_el.innerHTML += '<div class="message text-white"><strong>'+ e.user + ':</strong>'+ e.message +'</div>'
        });