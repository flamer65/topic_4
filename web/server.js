const express = require('express');
const app = express();
const port = 3000;
const base = `${__dirname}/public`;
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(`${base}/device-list.html`);
});
app.get('/register-device', (req, res) => {
    res.sendFile(`${base}/register-devices.html`);
});
//iot - applications
app.get('/iot-appliction', (req, res) => {
    res.sendFile(`${base}/iot-appliction.html`);
});
app.get('*', (req, res) => {
    res.sendFile(`${base}/404.html`);
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
