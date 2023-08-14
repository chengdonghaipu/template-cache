import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateCacheDirective } from './template-cache.directive';



@NgModule({
  declarations: [
    TemplateCacheDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemplateCacheDirective
  ]
})
export class TemplateCacheModule { }
