import { Component, OnInit } from '@angular/core';

import {PlayerService} from '../player.service'
import { Template } from '../datebase/Template';

@Component({
  moduleId: module.id,
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})

export class ScoreboardComponent implements OnInit {

  constructor (private playerService: PlayerService) {}
  
  playerDB: any;

  sortType(sort: string) {
    if (sort === 'record') {
      this.playerDB = this.playerDB.sort(this.sortByMoves);
      console.log(this.playerDB);
    }
    if (sort === 'time') {
      this.playerDB = this.playerDB.sort(this.sortByTime);
      console.log(this.playerDB);
    }
  }

  sortByMoves(m1: any, m2: any) {
    if(m1.record > m2.record) return 1;
    else if (m1.record === m2.record) return 0;
    else return -1;
  }

  sortByTime(m1: any, m2: any) {
    if(m1.record < m2.record) return 1;
    else if (m1.record === m2.record) return 0;
    else return -1;
  }

  ngOnInit() {
    this.playerService.getPlayers().then(result => {
      this.playerDB = result;
      console.log(this.playerDB);
    });
    console.log(this.playerDB);
  }

}
