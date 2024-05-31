const mqtt = require('mqtt');

const clientId = 'fubo' + Math.random().toString(16).substring(2, 8);


const client = mqtt.connect('mqtt://broker.fubogroup.com:1883', {
// const client = mqtt.connect('mqtt://34.97.191.234:1883', {
    clientId,
});

client.on('connect', (response) => {
    console.log(`connected ${client.connected}`);
    console.log(response);

    client.publish('test', 'Hello MQTT', (error) => {
        if (error) {
            console.log(`Can't publish ${error}`);
        } else {
            console.log('Message published');
            // client.end();
        }
    })
});

client.on('error', (error) => {
    console.log(`Can't connect ${error}`);
});
