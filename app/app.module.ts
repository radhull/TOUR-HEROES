import { NgModule }            from '@angular/core';
import { BrowserModule }       from '@angular/platform-browser';
import { FormsModule }         from '@angular/forms';

import { AppRoutingModule }    from './app-routing.module';

import { AppComponent }        from './app.component';
import { HeroesComponent  }    from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { DashBoardComponent }  from './dashboard.component';
import { HeroService }         from './hero.service';


@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  AppRoutingModule
                ],
  declarations: [ AppComponent, DashBoardComponent, HeroDetailComponent, HeroesComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
