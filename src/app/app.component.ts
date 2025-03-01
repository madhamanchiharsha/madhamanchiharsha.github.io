import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { KnowHarshaModule } from './know-harsha/know-harsha.module';
import { SidebarComponent } from './know-harsha/sidebar/sidebar.component';
import { HeaderComponent } from './know-harsha/header/header.component';
import { GlobalService } from './know-harsha/global.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,KnowHarshaModule, SidebarComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  contentHolder: any;

  
  constructor(public _globalService: GlobalService){
   
  }
  ngOnInit(): void {

    // highlight the content whenever sidebaropens 
    this.contentHolder = document.getElementById('content');
    this._globalService.isSideBarOpen.subscribe((isSideBarOpen) => {
      this.contentHolder?.classList.toggle('shifted');
    })
 
  }

  
  

}
