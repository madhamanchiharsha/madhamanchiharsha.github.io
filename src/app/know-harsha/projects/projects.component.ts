import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports:[],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {


    constructor(private _globalService: GlobalService){
      this._globalService.headerTitle.next('Projects, I worked on')
    }


  

}
