import { Component } from '@angular/core';
import { DesktopNavbarComponent } from '../desktop-navbar/desktop-navbar.component';
import { MobileNavbarComponent } from '../mobile-navbar/mobile-navbar.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [DesktopNavbarComponent,MobileNavbarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
