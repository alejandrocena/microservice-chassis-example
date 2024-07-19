import express  from 'express';
const app = express();
const port = 3000;


// Chassis Logger
import LoggerBuilder from '@chassis/logger';
const logger = LoggerBuilder("social-ms-demo",'v0.0.1');
// Chassis Express Logger
import express_logger from '@chassis/express-logger';
express_logger(app, logger);
// Chassis de HTTP Calls
import HttpCaller from '@weeby/http';
const http = HttpCaller(logger);



app.get('/external', async (req, res) => {
    try {
        const result = await http('https://eodh58sbdqjpu5h.m.pipedream.net');
        res.send(result);
    } catch (error) {
        res.status(500).send('Uppps!');
    }
});


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    logger.info(`Example app listening on port ${port}`)
})