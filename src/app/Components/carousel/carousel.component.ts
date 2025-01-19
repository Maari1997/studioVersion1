import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {LazyLoadImageModule} from 'ng-lazyload-image'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule,MatIconModule,RouterLink,LazyLoadImageModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CarouselComponent {
  images = [
    'assets/images/carousel1.jpg',
    'assets/images/carousel2.jpg',
    'assets/images/carousel3.jpg',
  ];  
}
