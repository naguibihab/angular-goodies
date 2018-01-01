import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

// Metadata
@Component({
	selector: 'app-heroes', // element selector; matches the name of the HTML element that identifies this component within a parent component's template.
	templateUrl: './heroes.component.html', // The location of the component's template file
	styleUrls: ['./heroes.component.css'] // the location of the template's css
})
export class HeroesComponent implements OnInit {
	selectedHero: Hero;
	heroes = HEROES;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	constructor() { }

	ngOnInit() {
	}

}