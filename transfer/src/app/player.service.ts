import { Injectable } from '@angular/core';

import * as PouchDB from 'pouchdb';
import { UUID } from 'angular2-uuid';
import {Observable} from 'rxjs/Observable';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
// import 'rxjs/RX';
// import { Template } from './datebase/Template'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayerService {

  constructor() {}

  db = new PouchDB('todos');
  remoteCouch = 'http://localhost:5984/todos';
  showName: string;
  result: any;

  getPlayers(): Promise<any> {
    console.log(this.db.allDocs({include_docs: true, attachments: true}));
    console.log(this.db.get('05247512-290c-d896-11d6-6249eedb7a9a'));
    return this.db.get('05247512-290c-d896-11d6-6249eedb7a9a')
        .then(result => {
          this.result = result;
          console.log(this.result);
        })
        .catch(err => err);
  }

  addPlayer(playerName: string) {
    console.log(this.db);

    // let newPlayer = new Template(playerName);

    let addTodo = (newPlayer:string) => {
      console.log(this.db);
      let todo = {
        name: newPlayer,
        record: 0,
        time: 0,
        _id: UUID.UUID()
      };
      this.db.put(todo, function callback(err, result) {
        console.log('put');
        if (!err) {
          console.log('Successfully posted a todo!');
          console.log(result);
        }
        else {
          console.log(err);
          console.log(result);
        }
      });
    };

    addTodo(playerName);

    let sync = () => {
      let opts = {live: true};
      this.db.sync(this.remoteCouch, opts);
    };

    sync();

    this.showName = playerName;
  }

  toggleTodo(payerName: string) {
    return payerName;
  }
  
}
