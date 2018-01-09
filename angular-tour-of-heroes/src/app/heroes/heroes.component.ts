import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

// Metadata
@Component({
	selector: 'app-heroes', // element selector; matches the name of the HTML element that identifies this component within a parent component's template.
	templateUrl: './heroes.component.html', // The location of the component's template file
	styleUrls: ['./heroes.component.css'] // the location of the template's css
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes: Hero[];

	constructor(private heroService : HeroService) { 
		/*
			Reserve the constructor for simple initialization such as wiring constructor parameters to properties.
			The constructor shouldn't do anything.
			It certainly shouldn't call a function that makes HTTP requests to a remote server as a real data service would.
		*/
	}

	ngOnInit() {
		this.getHeroes();
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	getHeroes() : void {
		this.heroes = this.heroService.getHeroes();
	}

}