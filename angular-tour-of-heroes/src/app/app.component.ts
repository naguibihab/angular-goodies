import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Always export the class so you can import it somewhere else like in AppModule
export class AppComponent {
  title = 'Tour Of Heros';
}
