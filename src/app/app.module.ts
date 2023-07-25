import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './heroes/list/components/list/list.component';
import { HeroComponent } from './heroes/hero/components/hero/hero.component';
import { ListModule } from './heroes/list/list.module';
import { HeroModule } from './heroes/hero/hero.module';
import { DbzModule } from './dbz/dbz.module';


@NgModule({
  declarations: [
    AppComponent


  ],
  imports: [
    BrowserModule,
    ListModule,
    HeroModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
