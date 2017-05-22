import { Component, OnInit } from '@angular/core';

import {PlayerService} from '../player.service'
import { Template } from '../datebase/Template';


@Component({
  moduleId: module.id,
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.css']
})
export class StartscreenComponent implements OnInit {
  playerDB: Template[];
  showName: string;

  constructor (private playerService: PlayerService) {
    this.playerDB = [];
  }

  ngOnInit() {
  }

  onOpen(playerName: string) {
    this.showName = playerName;
  }


}
