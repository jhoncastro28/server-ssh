const express = require('express');
const { Client } = require('ssh2');
const fs = require('fs');  // Para leer la clave privada
const app = express();

app.get('/deploy', (req, res) => {
    const conn = new Client();
    
    conn.on('ready', () => {
        console.log('Conectado al servidor!');
        
        conn.exec('bash /home/castrojhon/Documents/server-ssh/deploy.sh', (err, stream) => {
            if (err) {
                console.error('Error al ejecutar el script:', err);
                return res.status(500).json({ success: false, message: 'Error al ejecutar el script.' });
            }

            stream.on('close', (code, signal) => {
                console.log('El script de despliegue ha terminado.');
                conn.end();
                res.json({ success: true, message: 'Despliegue completado.' });
            }).on('data', (data) => {
                console.log('STDOUT: ' + data);
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).connect({
        host: '10.0.2.15',
        port: 22,
        username: 'castrojhon',
        privateKey: fs.readFileSync('/home/castrojhon/.ssh/id_rsa')
    });
});

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});