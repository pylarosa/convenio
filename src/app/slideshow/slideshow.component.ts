import {Component, computed, Signal, signal} from '@angular/core';
import {SlideComponent} from './slide/slide.component';
import {NgForOf} from "@angular/common";


@Component({
  selector: 'app-slideshow',
  imports: [
    SlideComponent,
    NgForOf
  ],
  templateUrl: './slideshow.component.html',
  standalone: true,
  styleUrl: './slideshow.component.css'
})
export class SlideshowComponent {
  slides = [
    {
      image: '/slides/vacanza.png',
      text: 'Organizzare la vacanza è più semplice e conveniente \n con offerte che ti fanno partire con il sorriso'
    },
    {
      image: '/slides/ristorante.png',
      text: 'Il piacere di mangiare fuori incontra il gusto del risparmio. \nBuon cibo, ottime offerte'
    },
    {
      image: '/slides/disco.png',
      text: 'Rendi le tue serate indimenticabili. \nDivertiti senza pensieri e approfitta delle migliori offerte locali'
    },
    {
      image: '/slides/gastronomia.png',
      text: 'Scopri sapori autentici e offerte esclusive con Convenio. \nUn’esperienza gastronomica da ricordare.'
    },
    {
      image: '/slides/sauna.png',
      text: 'Regalati un momento di relax a un prezzo speciale. \nBenessere accessibile a tutti.'
    },
    {
      image: '/slides/cinema.png',
      text: 'Il cinema e il teatro diventano ancora più accessibili. \nGoditi lo spettacolo, risparmiando'
    },
  ];

  currentSlide = signal(0);

  constructor() {
    this.startSlideShow();
  }

  startSlideShow() {
    const intervalId = setInterval(() => {
      this.currentSlide.set((this.currentSlide() + 1) % this.slides.length);
      console.log(this.currentSlide())
    }, 5000);

    // Optionally clean up interval if needed (manual destroy handling)
    return () => clearInterval(intervalId);
  }

  isSlideActive(index: number): Signal<boolean> {
    console.log(this.currentSlide() === index)
    return computed(() => this.currentSlide() === index);
  }
}
