import {Component, Input, input, Signal} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-slide',
  imports: [],
  templateUrl: './slide.component.html',
  standalone: true,
  styleUrl: './slide.component.css',
  animations: [
    trigger('slideInAnimation', [
      state(
        'inactive',
        style({
          transform: 'translateX(100%)',
          opacity: 0,
        })
      ),
      state(
        'active',
        style({
          transform: 'translateX(0)',
          opacity: 1,
        })
      ),
      transition('inactive => active', [
        animate('600ms ease-out'),
      ]),
      transition('active => inactive', [
        animate('400ms ease-in'),
      ]),
    ]),
  ]
})
export class SlideComponent {
  image = input.required()
  textInput = input.required()
  marginBlockEnd = input("low")
  @Input() isActive!: Signal<boolean>;

  getMarginValue() {
    if (this.marginBlockEnd() === "high") {
      return "80vh"
    }
    if (this.marginBlockEnd() === "medium") {
      return "50vh"
    }
    return "30vh"
  }
}
