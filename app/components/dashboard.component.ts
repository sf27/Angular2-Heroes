import {Component, OnInit} from "@angular/core";
import {Hero} from "../objects/hero";
import {HeroService} from "../services/hero.service";


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: '../html/dashboard.component.html',
  styleUrls: ['../styles/dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => {
        console.log('heroes: ', heroes.slice(1, 5));
        return this.heroes = heroes.slice(1, 5);
      });
  }
}
