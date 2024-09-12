const express = require('express');
const {exec} = require('child_process');
const { stdout, stderr } = require('process');
const { error } = require('console');
const app = express();
const PORT = 3000;

app.post('/deploy', (req, res) => {
    exec('ssh user@remote-server "bash "', (error, stdout, stderr) => {
        if(error){
            console.error(`Error: ${error.message}`);
            return res.json({success: false});
        }
        if(stderr){
            console.error(`Stderr: ${stederr}`);
            return res.json({success: false});
        }
        console.log(`Stodut: ${stdout}`);
        res.json({success: true});
    });
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en puerto: ${PORT}`)
});