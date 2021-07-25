import { Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  // Set variables with types
  lines = [1, 2, 3]
  toggle: boolean =  false
  scrWidth:any;

  constructor() { 
    this.getScreenSize();
  }
  
  // Get the width of the window screen
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrWidth = window.innerWidth;
  }

  // Toggle the burger menu
  onToggle() {
    this.toggle = !this.toggle
  }

}
