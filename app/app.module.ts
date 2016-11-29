import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {HeroesComponent} from "./components/heroes.component";
import {HeroDetailComponent} from "./components/hero-detail.component";
import {HeroService} from "./services/hero.service";
import {AppComponent} from "./components/app.component";
import {DashboardComponent} from "./components/dashboard.component";
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    DashboardComponent,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent,]
})
export class AppModule {
}

