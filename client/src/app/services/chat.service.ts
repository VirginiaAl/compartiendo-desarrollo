import { Injectable, EventEmitter } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../environments/environment';

const BASE_DOMAIN = environment.BASE_URL;

interface Message{
  message:string;
  username:string;
}

@Injectable()
export class ChatService {
  socket:any;
  messages:Array<Message> = [];
  constructor(){
    console.log("Created chat service");
    this.socket = io.connect(`${BASE_DOMAIN}`);
    this.socket.on('recibe-message', function(data:any){
      console.log(`Mensaje Recibido: "${data.message}"`);
      this.messages.push({
        username: 'Anonimo',
        message:data.message
      })
    }.bind(this));
  }

  sendMessage(m){
    console.log(`Mandando mensaje: "${m}"`);
    this.socket.emit('send-message',{
      message:m
    });
    this.messages.push({
      username: 'Yo',
      message:m
    })
  }
}
