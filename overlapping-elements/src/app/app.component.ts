import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styles: ['.mat-tooltip {white-space: pre-line;}','.overlap_hidden {position: absolute !important;}'],
})
export class AppComponent {
  title = 'app';

	public dateFormats = [
		'dd/mm/yyyy',
		'dd-mm-yyyy'
	]

	public dateFormat = 'dd/mm/yyyy';

	public onDateChange() {
		console.log("Date changed to ",this.dateFormat);
	}
}
