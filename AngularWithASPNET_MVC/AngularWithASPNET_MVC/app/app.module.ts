import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CoreComponent } from './ts/corebody/corebody';

@NgModule({
    imports: [BrowserModule, HttpModule ],
  declarations: [
      AppComponent,
      CoreComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
