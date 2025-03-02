import { AfterViewInit, Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  public headerTitle = "";

  constructor(public _globalService: GlobalService) {}
  
  ngOnInit(): void {
     this._globalService.headerTitle.subscribe( (headerTitle) => {
      this.headerTitle = headerTitle;
    });
  }




}
