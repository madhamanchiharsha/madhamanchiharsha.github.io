import { Component, HostListener, OnInit } from '@angular/core';
import { routes } from '../../app.routes';
import { Router, RouterModule } from '@angular/router'
import { Subject } from 'rxjs';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-sidebar',
  imports: [ RouterModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {
  
  constructor(public _router: Router,
    public _globalService: GlobalService ) {
      
  }

  ngOnInit() {
    //this.buttonColour();
  }
  isSidebarOpen = false;
  
  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    this._globalService.isSideBarOpen.next(this.isSidebarOpen);

  }
  
  closeSidebar(): void {
    this.isSidebarOpen = false;
    this._globalService.isSideBarOpen.next(this.isSidebarOpen);
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeSidebar();
    }
  }

  navigateTo(location: any){
    this._router.navigate([location]); 
    this.closeSidebar();
  }


}
