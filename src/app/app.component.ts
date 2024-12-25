import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { HeaderComponent } from './Components/header/header.component';
import { AlbumsComponent } from './Components/albums/albums.component';
import { ServicesComponent } from './Components/services/services.component';
import { ContactComponent } from './Components/contact/contact.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,HomeComponent,CarouselComponent,HeaderComponent,AlbumsComponent,
    ServicesComponent,ContactComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'MyStudio';
  ngOnInit(): void {
    AOS.init();
  }
  
}
