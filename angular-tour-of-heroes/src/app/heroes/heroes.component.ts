import { Component, OnInit } from '@angular/core';

// Metadata
@Component({
  selector: 'app-heroes', // css selector; matches the name of the HTML element that identifies this component within a parent component's template.
  templateUrl: './heroes.component.html', // The location of the component's template file
  styleUrls: ['./heroes.component.css'] // the location of the template's css
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
