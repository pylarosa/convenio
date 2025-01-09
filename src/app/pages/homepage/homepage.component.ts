import {Component} from '@angular/core';
import {SlideshowComponent} from '../../slideshow/slideshow.component';

@Component({
  selector: 'app-homepage',
  imports: [
    SlideshowComponent
  ],
  templateUrl: './homepage.component.html',
  standalone: true,
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
