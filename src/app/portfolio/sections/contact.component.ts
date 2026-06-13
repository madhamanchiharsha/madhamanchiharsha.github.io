import { Component } from '@angular/core';
import { RevealDirective } from '../reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly email = 'madhamanchi.harsha@gmail.com';
  readonly mailto =
    'mailto:madhamanchi.harsha@gmail.com?subject=Hello%20Harsha&body=Hi%20Harsha%2C%0A%0AI%27d%20love%20to%20chat%20about...';
}
