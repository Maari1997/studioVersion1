import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent implements OnInit {
  services:any[]=[];
ngOnInit(): void {
  this.services = [
    {
      title: 'Flex Design',
      image: 'assets/images/flexdesign.jpg',     
      description: 'Custom-designed flex banners to make your events shine.'
    },
    {
      title: 'Album Design',
      image: 'assets/images/album.jpg', 
      description: 'Creative and personalized album designs for every occasion.'
    },
    {
      title: 'Outdoor Shoot',
      image: 'assets/images/outdoor.jpg', 
      description: 'Capture memories with stunning outdoor photography sessions.'
    },
    {
      title: 'Visiting Card Design',
      image: 'assets/images/visitingcard.jpg', 
      description: 'Professional and eye-catching visiting card designs.'
    },
    {
      title: 'Photo Frame',
      image: 'assets/images/photoframe.jpg', 
      description: 'Beautifully crafted photo frames for your cherished pictures.'
    },
    {
      title: 'Wedding Ceremony',
      image: 'assets/images/wedding.jpg', 
      description: 'Exceptional photography for your special wedding moments.'
    }
  ];
}
}
