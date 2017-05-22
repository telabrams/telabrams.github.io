import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {PlayerService} from '../player.service'
import { Template } from '../datebase/Template';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() playerName: string;
  @Output() open: EventEmitter<any> = new EventEmitter();
  playerDB: Template[];


  constructor (private playerService: PlayerService) {
    this.playerDB = [];
  }

  onSubmit() {
    this.playerService.addPlayer(this.playerName);
  }

  toggle() {
    this.open.emit(this.playerName);
    console.log(this.playerName);
  }

  ngOnInit() {

  }

}
