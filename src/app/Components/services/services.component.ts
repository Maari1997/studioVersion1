import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-services',
  standalone: true,
  imports: [MatIcon,CommonModule,MatCardModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  services:any[]=[];
ngOnInit(): void {
  this.services = [
    {
      title: 'Flex Design',
      image: 'assets/images/flexdesign.webp',     
      description: 'Custom-designed flex banners to make your events shine.'
    },
    {
      title: 'Album Design',
      image: 'assets/images/album.webp', 
      description: 'Creative and personalized album designs for every occasion.'
    },
    {
      title: 'Outdoor Shoot',
      image: 'assets/images/outdoor.webp', 
      description: 'Capture memories with stunning outdoor photography sessions.'
    },
    {
      title: 'Visiting Card Design',
      image: 'assets/images/visitingcard.webp', 
      description: 'Professional and eye-catching visiting card designs.'
    },
    {
      title: 'Photo Frame',
      image: 'assets/images/photoframe.webp', 
      description: 'Beautifully crafted photo frames for your cherished pictures.'
    },
    {
      title: 'Wedding Ceremony',
      image: 'assets/images/wedding.webp', 
      description: 'Exceptional photography for your special wedding moments.'
    },
    {
      title: 'Photo Frame',
      image: 'assets/images/photoframe.webp', 
      description: 'Beautifully crafted photo frames for your cherished pictures.'
    },
    {
      title: 'Wedding Ceremony',
      image: 'assets/images/wedding.webp', 
      description: 'Exceptional photography for your special wedding moments.'
    }
  ];
}
}
