import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {
  currentIndex: number;
  blocks:Array<{number: number,
                class_id: string}>;

  constructor() {

    this.blocks = [{
        number: 1,
        class_id: 'x1y1'
      },
      {
        number: 2,
        class_id: 'x2y1'
      },
      {
        number: 3,
        class_id: 'x3y1'
      },
      {
        number: 4,
        class_id: 'x4y1'
      },
      {
        number: 5,
        class_id: 'x1y2'
      },
      {
        number: 6,
        class_id: 'x2y2'
      },
      {
        number: 7,
        class_id: 'x3y2'
      },
      {
        number:8,
        class_id: 'x4y2'
      },
      {
        number:9,
        class_id: 'x1y3'
      },
      {
        number:10,
        class_id: 'x2y3'
      },
      {
        number:11,
        class_id: 'x3y3'
      },
      {
        number:12,
        class_id: 'x4y3'
      },
      {
        number:13,
        class_id: 'x1y4'
      },
      {
        number:14,
        class_id: 'x2y4'
      },
      {
        number:15,
        class_id: 'x3y4'
      },
      {
        number:0,
        class_id: 'x4y4'
      }];
  }



  ngOnInit() {
  }

  trackByFn(index, item) {
    return item.id; // or item.id
  }

 clickEvent(class_id: string, block: any) {
   let defaultBlock: any;
    for (let i =0;i<17;i++) {
      if (this.blocks[i].number === 0){
        defaultBlock = this.blocks[i];
        console.log('false block '+i);
        this.currentIndex = this.blocks.indexOf(block);
        console.log('current block '+this.currentIndex);

        if (this.blocks[this.currentIndex+1] === defaultBlock && (this.currentIndex != 7 && this.blocks[this.currentIndex+1].number != 8)) {
          let swapClass = this.blocks[this.currentIndex+1];
          let swapedClass = this.blocks[this.currentIndex];
          let swapClassC = this.blocks[this.currentIndex+1].class_id;
          let swapedClassC = this.blocks[this.currentIndex].class_id;
          this.blocks[this.currentIndex] = swapClass;
          this.blocks[this.currentIndex+1] = swapedClass;
          this.blocks[this.currentIndex].class_id = swapedClassC;
          this.blocks[this.currentIndex+1].class_id = swapClassC;
        }

        else if (this.blocks[this.currentIndex+4] === defaultBlock) {
          let swapClass = this.blocks[this.currentIndex+4];
          let swapedClass = this.blocks[this.currentIndex];
          let swapClassC = this.blocks[this.currentIndex+4].class_id;
          let swapedClassC = this.blocks[this.currentIndex].class_id;
          this.blocks[this.currentIndex] = swapClass;
          this.blocks[this.currentIndex+4] = swapedClass;
          this.blocks[this.currentIndex].class_id = swapedClassC;
          this.blocks[this.currentIndex+4].class_id = swapClassC;
        }

        else if (this.blocks[this.currentIndex-4] === defaultBlock) {
          let swapClass = this.blocks[this.currentIndex-4];
          let swapedClass = this.blocks[this.currentIndex];
          let swapClassC = this.blocks[this.currentIndex-4].class_id;
          let swapedClassC = this.blocks[this.currentIndex].class_id;
          this.blocks[this.currentIndex] = swapClass;
          this.blocks[this.currentIndex-4] = swapedClass;
          this.blocks[this.currentIndex].class_id = swapedClassC;
          this.blocks[this.currentIndex-4].class_id = swapClassC;
        }

        else if (this.blocks[this.currentIndex-1] === defaultBlock) {
          let swapClass = this.blocks[this.currentIndex-1];
          let swapedClass = this.blocks[this.currentIndex];
          let swapClassC = this.blocks[this.currentIndex-1].class_id;
          let swapedClassC = this.blocks[this.currentIndex].class_id;
          this.blocks[this.currentIndex] = swapClass;
          this.blocks[this.currentIndex-1] = swapedClass;
          this.blocks[this.currentIndex].class_id = swapedClassC;
          this.blocks[this.currentIndex-1].class_id = swapClassC;
        }

        return false;

      }
    }



   // this.blocks[this.currentIndex].class_id = defaultBlock;
   // this.blocks[15].class_id = class_id;
   // console.log(this.currentIndex);
   // console.log(defaultBlock);
 }

}
