import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-test-view1',
  template: `
    <p>
      test-view1 works! {{count}}
    </p>
    <button (click)="add()">add</button>
  `,
  styles: [
  ]
})
export class TestView1Component implements DoCheck {
  count = 0

  add() {
    this.count ++;
  }
  constructor() {
    console.log('TestView1Component');
    setInterval(() => {}, 1000)
  }

  ngDoCheck() {
    console.log('ngDoCheck1');
  }
}
