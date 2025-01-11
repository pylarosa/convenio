import {Component, signal} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgIf} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';

export type LayoutOption = 'none' | 'foot' | 'head' | 'all';

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
  showNavbar = signal(true);
  showFooter = signal(true);

  private layoutConfig: Map<string, LayoutOption> = new Map([
    ['/about', 'head'],
    ['/homepage', 'all'],
  ]);

  getLayoutOption(route: string): LayoutOption {
    return this.layoutConfig.get(route) || 'all';
  }

  constructor(private router: Router) {
    this.adjustLayoutBasedOnRoute();
  }

  adjustLayoutBasedOnRoute() {
    this.router.events.subscribe(() => {
      const currentRoute = this.router.url;
      const layoutOption = this.getLayoutOption(currentRoute);
      this.showNavbar.set(layoutOption === 'head' || layoutOption === 'all');
      this.showFooter.set(layoutOption === 'foot' || layoutOption === 'all');
    });
  }
}
