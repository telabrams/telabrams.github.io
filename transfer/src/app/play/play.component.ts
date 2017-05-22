import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  currentClass: string;
  currentBlock: any;
  currentIndex: number;
  blocks:Array<{number: string,
                class_id: string}>;

  constructor() {
    this.blocks = [{
        number:'1',
        class_id: 'x1y1'
      },
      {
        number:'2',
        class_id: 'x2y1'
      },
      {
        number:'3',
        class_id: 'x3y1'
      },
      {
        number:'4',
        class_id: 'x4y1'
      },
      {
        number:'5',
        class_id: 'x1y2'
      },
      {
        number:'6',
        class_id: 'x2y2'
      },
      {
        number:'7',
        class_id: 'x3y2'
      },
      {
        number:'8',
        class_id: 'x4y2'
      },
      {
        number:'9',
        class_id: 'x1y3'
      },
      {
        number:'10',
        class_id: 'x2y3'
      },
      {
        number:'11',
        class_id: 'x3y3'
      },
      {
        number:'12',
        class_id: 'x4y3'
      },
      {
        number:'13',
        class_id: 'x1y4'
      },
      {
        number:'14',
        class_id: 'x2y4'
      },
      {
        number:'15',
        class_id: 'x3y4'
      },
      {
        number:'16',
        class_id: 'x4y4'
      }];
  }



  ngOnInit() {
  }

  trackByFn(index, item) {
    return index; // or item.id
  }

 clickEvent(class_id: string, block: any) {
   let defaultBlock: any = this.blocks[15].class_id;
   this.currentClass = class_id;
   this.currentBlock = block;
   this.currentIndex = this.blocks.indexOf(block);
   this.blocks[this.currentIndex].class_id = defaultBlock;
   this.blocks[15].class_id = class_id;
   console.log(this.currentIndex);
   console.log(defaultBlock);
 }

}
