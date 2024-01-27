const https = require('https');
const express = require('express')
const TelegramBot = require('node-telegram-bot-api');
const fs = require('fs');
const app = express()
const bot = new TelegramBot('6680401318:AAHnnOD316PSUdbDABArKfmRtbSqp98OcuA', { polling: true });

const options = {
    cert: fs.readFileSync('./sslcert/fullchain.pem'),
    key: fs.readFileSync('./sslcert/privkey.pem')
};

app.use(express.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/feedback', (req, res) => {
    console.log(req.body)
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    const chatId = '5330517642';
    let result = `${name} отправил сообщение:\n${message}\nЕго email: ${email}`

    bot.sendMessage(chatId, result)
        .then(() => {
            res.send('Сообщение успешно отправлено в Telegram');
        })
        .catch((error) => {
            res.status(500).send('Ошибка при отправке сообщения в Telegram');
            console.error(error);
        })
})

const PORT = 443

https.createServer(options, app).listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});