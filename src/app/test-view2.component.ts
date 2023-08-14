import {Component, DoCheck} from '@angular/core';

@Component({
  selector: 'app-test-view2',
  template: `
    <p>
      test-view2 works!
    </p>
  `,
  styles: [
  ]
})
export class TestView2Component implements DoCheck {

  constructor() {
    console.log('TestView2Component');
    setInterval(() => {}, 1000)
  }

  ngDoCheck() {
    console.log('ngDoCheck2');
  }
}
