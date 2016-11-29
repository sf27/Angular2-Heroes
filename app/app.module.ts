import './rxjs-extensions';
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HeroesComponent} from "./components/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {HeroService} from "./services/hero.service";
import {AppComponent} from "./components/app.component";
import {DashboardComponent} from "./components/dashboard.component";
import {HeroSearchComponent} from "./components/hero-search.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './services/in-memory-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  providers: [HeroService],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

