import {Component, input} from '@angular/core';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.component.html',
  standalone: true,
  styleUrl: './slide.component.css'
})
export class SlideComponent {
  image = input.required()
  textInput = input.required()
}
