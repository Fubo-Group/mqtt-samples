const mqtt = require('mqtt');

const clientId = 'fubo' + Math.random().toString(16).substring(2, 8);

const client = mqtt.connect('mqtt://127.0.0.1:1883', {
    clientId,
});

client.on('connect', (response) => {
    console.log(`connected ${client.connected}`);
    console.log(response);

    client.subscribe('test');
});

client.on('message', (topic, message, packet) => {
    console.log(`Received message from ${topic}: ${message.toString()}`);
    console.log(packet);
});

client.on('error', (error) => {
    console.log(`Can't connect ${error}`);
});


