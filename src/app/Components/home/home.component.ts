import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { HeaderComponent } from '../header/header.component';
import { AlbumsComponent } from '../albums/albums.component';
import { ServicesComponent } from '../services/services.component';
import { ContactComponent } from '../contact/contact.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,CarouselComponent,AlbumsComponent,ServicesComponent,ContactComponent,
    NavbarComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  services:any[]=[];
ngOnInit(): void {
  this.services = [
    {
      title: 'Flex Design',
      image: 'https://via.placeholder.com/100x100?text=Flex',
      description: 'Custom-designed flex banners to make your events shine.'
    },
    {
      title: 'Album Design',
      image: 'https://via.placeholder.com/100x100?text=Album',
      description: 'Creative and personalized album designs for every occasion.'
    },
    {
      title: 'Outdoor Shoot',
      image: 'https://via.placeholder.com/100x100?text=Outdoor',
      description: 'Capture memories with stunning outdoor photography sessions.'
    },
    {
      title: 'Visiting Card Design',
      image: 'https://via.placeholder.com/100x100?text=Cards',
      description: 'Professional and eye-catching visiting card designs.'
    },
    {
      title: 'Photo Frame',
      image: 'https://via.placeholder.com/100x100?text=Frame',
      description: 'Beautifully crafted photo frames for your cherished pictures.'
    },
    {
      title: 'Wedding Ceremony',
      image: 'https://via.placeholder.com/100x100?text=Wedding',
      description: 'Exceptional photography for your special wedding moments.'
    }
  ];
}


}
