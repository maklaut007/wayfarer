import { Component } from '@angular/core';
import { cities } from '../data/cities';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  cities = [...cities];
}
