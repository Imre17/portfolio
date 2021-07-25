import { AfterViewInit, Component, ElementRef, HostListener, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  scrWidth: any;

  //View Child from about-me boxes 
  @ViewChild('box3') box3: ElementRef;
  @ViewChild('box2') box2: ElementRef;

  constructor() {
    this.getScreenSize();
  }

  // Get the width of the window screen
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
        this.scrWidth = window.innerWidth;
  }

  // Hover effect for the image;
  ngAfterViewInit() {
    this.box3.nativeElement.addEventListener('mouseover', () => { 
      
      // Hover effect is not applied after 750px width of the screen
      if(this.scrWidth > 975) {
        this.box3.nativeElement.style.left = '1.25rem'
        this.box2.nativeElement.style.left = '1.25rem'
      }
    })
    
    this.box3.nativeElement.addEventListener('mouseleave', () => {
      this.box3.nativeElement.style.left = '0'
      this.box2.nativeElement.style.left = '0'
    })
  }

}
