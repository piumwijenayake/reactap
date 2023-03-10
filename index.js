const express = require('express');
const app = express();
app.use(express.json());
//Handling Get request for / URI
app.get('/', (req, res) => {
res.send('Express App Running');
});
app.get('/time', (req, res) => {
    const time = new Date();
    let timestamps = time.getDate();
    res.send("Current server time" +time)})
app.post('/testpostrequest',(req,res)=>{
    res.send("server is handling post");
})
app.post('/recordTemp', (req,res)=>{
    const sensorreading = req.query.temp;
    if(sensorreading > 100){
        res.send("Sesnor reading is too high, Sensor reading :"+sensorreading);
    }
    else{
        res.send("Sesnor reading is ok, Sensor reading :"+sensorreading);
    }
})
app.post('/recordTemps', (req,res)=>{
    const sensorreading = req.query.temp || 0;
    if(sensorreading > 100){
        res.send("Sesnor reading is too high, Sensor reading :"+sensorreading);
    }
    else{
        res.send("Sesnor reading is ok, Sensor reading :"+sensorreading);
    }
})
app.post('/handlejson',function(req,res){
console.log(req.body);
const temp = req.body.temp;
const light = req.body.light;
const UID =req.body.sensorID.UID;
res.send("UID" +UID);
if (sensorReading) {
//UpdateDB(sensorReading)
res.send("Sensor 1 reading = " + sensorReading );
}
else {
res.send("Temp JSON parameter is not set in request");
}
})

//raw bpdy that need to paste in json citeria in postman


//Deploying the listener
const port =process.env.PORT || 8080;
app.listen(port, () => console.log(`Express server listening on port
${port}`));