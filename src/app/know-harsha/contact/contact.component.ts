import { Component } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports:[],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myEmail = 'madhamanchi.harsha@gmail.com';
  constructor(private _globalService: GlobalService){
    this._globalService.headerTitle.next('You can reach out to me')
  }

}
