import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { Heroes } from '../mock-heroes';

import { HeroService } from '../hero.api.service';

@Component({
  selector: 'app-hereos',
  templateUrl: './hereos.component.html',
  styleUrls: ['./hereos.component.css']
})
export class HereosComponent implements OnInit {

  hero: Hero = {
    id: 1,
    name: 'Prasanjeet'
  };

  heroes: Hero[];

  selectedHero: Hero = this.hero;

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHereos();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHereos(): void {

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }



}
