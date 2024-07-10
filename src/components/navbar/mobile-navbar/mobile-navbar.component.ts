import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-navbar',
  standalone: true,
  imports: [],
  templateUrl: './mobile-navbar.component.html',
  styleUrl: './mobile-navbar.component.css'
})
export class MobileNavbarComponent {
  home: string = 'assets/home.png';
  info: string = 'assets/info.png';
  contact: string = 'assets/contact.png';
  product: string = 'assets/product.png';
}
