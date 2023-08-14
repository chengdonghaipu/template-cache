import {Component, Inject, Renderer2} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div *appCache="show; else elseBlock">
        <app-test-view1></app-test-view1>
    </div>
    <ng-template #elseBlock>
      <app-test-view2></app-test-view2>
    </ng-template>
    <button (click)="show = true">显示</button>
    <button (click)="show = false">隐藏</button>
  `,
  styles: []
})
export class AppComponent {
  show = true

}
