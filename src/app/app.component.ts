import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private router: Router) {}

    // Has route it is applied for the footer, when the component is on the home page the footer is hide dinamicaly!
  hasRoute(route: string) {
    return this.router.url === route
  }
}
