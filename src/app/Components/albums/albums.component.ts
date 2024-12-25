import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {
  albums:any[]=[];
  ngOnInit(): void {
    this.albums = [
      {
        id: 1,
        title: 'Wedding Album',
        coverImage: 'assets/images/album1.jpg',
        description: 'A collection of beautiful moments from our wedding photography session.'
      },
      {
        id: 2,
        title: 'Family Portraits',
        coverImage: 'assets/images/album2.jpg',
        description: 'Classic family portraits captured with love and care, and photographs.'
      },
      {
        id: 3,
        title: 'Event Photography',
        coverImage: 'assets/images/album1.jpg',
        description: 'Capturing the essence of your events with stunning photographs.'
      },
      {
        id: 4,
        title: 'Event Photography',
        coverImage: 'assets/images/album2.jpg',
        description: 'Capturing the essence of your events with stunning photographs.'
      }
    ];
  }
 

  viewAlbum(albumId: number) {
    console.log(`Viewing album with ID: ${albumId}`);
    // Redirect to album page or show more details
  }
}
