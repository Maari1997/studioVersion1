import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {LazyLoadImageModule} from 'ng-lazyload-image'
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIcon,CommonModule,MatCardModule,LazyLoadImageModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // services:any[]=[];
  services = [
    {
      title: 'Flex Design',
      image: 'assets/images/flexdesign.jpg',
      description: 'Custom-designed flex banners to make your events shine.',
      highlight: 'Vibrant & Eye-Catching Designs'
    },
    {
      title: 'Album Design',
      image: 'assets/images/album.jpg',
      description: 'Creative and personalized album designs for every occasion.',
      highlight: 'Customizable Layouts & Themes'
    },
    {
      title: 'Outdoor Shoot',
      image: 'assets/images/outdoor.jpg',
      description: 'Capture memories with stunning outdoor photography sessions.',
      highlight: 'Natural Light & Locations'
    },
    {
      title: 'Visiting Card Design',
      image: 'assets/images/visitingcard.jpg',
      description: 'Professional and eye-catching visiting card designs.',
      highlight: 'Modern & Elegant Styles'
    },
    {
      title: 'Photo Frame',
      image: 'assets/images/photoframe.jpg',
      description: 'Beautifully crafted photo frames for your cherished pictures.',
      highlight: 'Handcrafted with Love'
    },
    {
      title: 'Wedding Ceremony',
      image: 'assets/images/wedding.jpg',
      description: 'Exceptional photography for your special wedding moments.',
      highlight: 'Capturing Timeless Memories'
    },
    {
      title: 'Photo Frame',
      image: 'assets/images/photoframe.jpg',
      description: 'Beautifully crafted photo frames for your cherished pictures.',
      highlight: 'Handcrafted with Love'
    },
    {
      title: 'Wedding Ceremony',
      image: 'assets/images/wedding.jpg',
      description: 'Exceptional photography for your special wedding moments.',
      highlight: 'Capturing Timeless Memories'
    }
  ];
  
ngOnInit(): void {
  // this.services = [
  //   {
  //     title: 'Flex Design',
  //     image: 'assets/images/flexdesign.jpg',     
  //     description: 'Custom-designed flex banners to make your events shine.'
  //   },
  //   {
  //     title: 'Album Design',
  //     image: 'assets/images/album.jpg',
  //     description: 'Creative and personalized album designs for every occasion.'
  //   },
  //   {
  //     title: 'Outdoor Shoot',
  //     image: 'assets/images/outdoor.jpg',
  //     description: 'Capture memories with stunning outdoor photography sessions.'
  //   },
  //   {
  //     title: 'Visiting Card Design',
  //     image: 'assets/images/visitingcard.jpg', 
  //     description: 'Professional and eye-catching visiting card designs.'
  //   },
  //   {
  //     title: 'Photo Frame',
  //     image: 'assets/images/photoframe.jpg', 
  //     description: 'Beautifully crafted photo frames for your cherished pictures.'
  //   },
  //   {
  //     title: 'Wedding Ceremony',
  //     image: 'assets/images/wedding.jpg',
  //     description: 'Exceptional photography for your special wedding moments.'
  //   },
  //   {
  //     title: 'Photo Frame',
  //     image: 'assets/images/photoframe.jpg',
  //     description: 'Beautifully crafted photo frames for your cherished pictures.'
  //   },
  //   {
  //     title: 'Wedding Ceremony',
  //     image: 'assets/images/wedding.jpg', 
  //     description: 'Exceptional photography for your special wedding moments.'
  //   }
  // ];
}
}
