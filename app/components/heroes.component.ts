import {Component} from '@angular/core';
import {Hero} from "../objects/hero";
import {HeroService} from '../services/hero.service';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: '../html/heroes.component.html',
  styleUrls: ['../styles/heroes.component.css']
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  constructor(private router: Router, private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
