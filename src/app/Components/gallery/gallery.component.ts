import { CommonModule } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import {LazyLoadImageModule} from 'ng-lazyload-image'

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule,LazyLoadImageModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class GalleryComponent implements OnInit {
  //slides:any[]=[];
   slides = [
    { image: 'assets/images/album1.jpg', alt: 'Nature 1' },
    { image: 'assets/images/album2.jpg', alt: 'Nature 2' },
    { image: 'assets/images/album1.jpg', alt: 'Nature 3' },
    { image: 'assets/images/album2.jpg', alt: 'Nature 4' },
    { image: 'assets/images/album1.jpg', alt: 'Nature 5' },
    { image: 'assets/images/album2.jpg', alt: 'Nature 6' },
    { image: 'assets/images/album1.jpg', alt: 'Nature 7' },
    { image: 'assets/images/album2.jpg', alt: 'Nature 8' },
    { image: 'assets/images/album1.jpg', alt: 'Nature 9' }
  ];
ngOnInit(): void {
  // this. slides = [
  //   { image: 'assets/images/album1.jpg', alt: 'Nature 1' },
  //   { image: 'assets/images/album2.jpg', alt: 'Nature 2' },
  //   { image: 'assets/images/album1.jpg', alt: 'Nature 3' },
  //   { image: 'assets/images/album2.jpg', alt: 'Nature 4' },
  //   { image: 'assets/images/album1.jpg', alt: 'Nature 5' },
  //   { image: 'assets/images/album2.jpg', alt: 'Nature 6' },
  //   { image: 'assets/images/album1.jpg', alt: 'Nature 7' },
  //   { image: 'assets/images/album2.jpg', alt: 'Nature 8' },
  //   { image: 'assets/images/album1.jpg', alt: 'Nature 9' }
  // ];
}
}
