import {Component} from '@angular/core';
import {SlideshowComponent} from '../../slideshow/slideshow.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [
    SlideshowComponent,
    RouterLink
  ],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
