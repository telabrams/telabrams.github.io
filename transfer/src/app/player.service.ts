import { Injectable } from '@angular/core';

import { PlayerDB } from './datebase/PlayerDB';
import { Template } from './datebase/Template';

@Injectable()
export class PlayerService {
  showName: string;
  PlayerDB:Template[] = PlayerDB;

  constructor() {}

  getPlayers() {
    return this.PlayerDB;
  }

  addPlayer(playerName: string) {
    let newPlayer = new Template(playerName);
    this.PlayerDB.push(newPlayer);
    this.showName = playerName;
  }

  toggleTodo(payerName: string) {
    return payerName;
  }
  
}
