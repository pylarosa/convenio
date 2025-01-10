import {Component, OnInit} from '@angular/core';
import {SlideComponent} from './slide/slide.component';

@Component({
  selector: 'app-slideshow',
  imports: [
    SlideComponent
  ],
  templateUrl: './slideshow.component.html',
  standalone: true,
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent implements OnInit {
  currentSlide = 0;
  slides: HTMLElement[] = [];

  ngOnInit() {
    this.slides = Array.from(document.querySelectorAll('.slide'));
    this.showSlide(this.currentSlide);

    // Automatically change slides every 5 seconds
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  showSlide(index: number) {
    this.slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.showSlide(this.currentSlide);
  }
}
