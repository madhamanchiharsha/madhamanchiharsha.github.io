import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public headerTitle = new Subject<string> ();
  public isSideBarOpen = new Subject<boolean>();
  

  constructor() { 

  }


}
