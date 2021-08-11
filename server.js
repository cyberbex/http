const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'.' ,'valores.json');    


var WebSocketServer = require('websocket').server;
var http = require('http');

//Porta que o server irá escutar
const port = 3000;


var valores = [];

    
app.get('/sensores/:temp?/:humidade?/:adc?',(req,res)=>{
    
      console.log(req.query.temp);
    //const json = req.query;
    
    valores[0] = req.query.temp;
    valores[1]= req.query.humidade;
    valores[2] = req.query.adc;
    
    var valorEsp = [

        { id:1, label:'temperatura', temperatura: valores[0]},
        { id:2, label:'humidade',humidade: valores[1]},
        { id:3, label:'adc',adc: valores[2]},
    ];
    
    const json = JSON.stringify(valorEsp);

    fs.writeFile(caminhoArquivo, json , { flag: 'w' });
    res.sendFile('index.html');
});
/* app.post('/sensores',(req,res)=>{
    console.log(req.body);
}); */

app.listen(port, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
 

//Cria o server
/* var server = http.createServer();

//Server irá escutar na porta definida em 'port'
server.listen(port, () => {
    //Server está pronto
    console.log(`Server está executando na porta ${port}`);
});

//Cria o WebSocket server
wsServer = new WebSocketServer({
  httpServer: server
});

//Chamado quando um client deseja conectar
wsServer.on('request', (request) => {
    //Estado do led: false para desligado e true para ligado
    let state = false;

    //Aceita a conexão do client
    let client = request.accept(null, request.origin);

    //Chamado quando o client envia uma mensagem
    client.on('message', (message) => {
        //Se é uma mensagem string utf8
        if (message.type === 'utf8') {
            //Mostra no console a mensagem
            console.log(message.utf8Data);
        }
    });

    //Cria uma função que será executada a cada 1 segundo (1000 millis) para enviar o estado do led
    let interval = setInterval(() => {
        //Envia para o client "ON" ou "OFF" dependendo do estado atual da variável state
        client.sendUTF(state? "ON" : "OFF");
        //Inverte o estado
        state = !state;
    }, 1000);//Tempo entre chamadas => 1000 millis = 1 segundo 

    //Chamado quando a conexão com o client é fechada
    client.on('close', () => {
        console.log("Conexão fechada");
        //Remove o intervalo de envio de estado
        clearInterval(interval);
    });
}); */