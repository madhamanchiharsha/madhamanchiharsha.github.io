import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent implements OnInit, OnDestroy{

  headerTitle = 'About Me';

  images: string[] = [ 'assets/images/1.jpeg', 'assets/images/2.jpeg', 'assets/images/3.jpeg']
  slideIndex: number = 0;
  interval: any;
  
  constructor(public _globalService: GlobalService) {

  }

  ngOnInit(): void {
    this._globalService.headerTitle.next(this.headerTitle);
    this.startSlideshow();
  }

  ngOnDestroy(): void {
    // Clean up the interval when the component is destroyed
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  startSlideshow(): void {
    this.interval = setInterval(() => {
      this.slideIndex = (this.slideIndex + 1) % this.images.length;
    }, 4000); // Change every 5 seconds
  }
  

}
