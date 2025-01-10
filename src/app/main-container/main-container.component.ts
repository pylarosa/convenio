import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-main-container',
  imports: [
    RouterOutlet,
    NavbarComponent,
    NgIf,
    FooterComponent
  ],
  templateUrl: './main-container.component.html',
  standalone: true,
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent {
  showNavbar = true;
}
