import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
  	'./app.component.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';

	public dateFormats = [
		'dd/mm/yyyy',
		'dd-mm-yyyy'
	]

	public dateFormatSelect = '';
	public dateFormat = 'dd/mm/yyyy';
}
