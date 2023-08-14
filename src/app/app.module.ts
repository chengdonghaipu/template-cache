import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TemplateCacheModule} from "./template-cache/template-cache.module";
import { TestView1Component } from './test-view1.component';
import { TestView2Component } from './test-view2.component';

@NgModule({
  declarations: [
    AppComponent,
    TestView1Component,
    TestView2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TemplateCacheModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
