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
        description: 'A collection of beautiful moments from our wedding photography session.',
        events: ['Wedding Photography', 'Engagement Sessions', 'Maternity Photography']
      },
      {
        id: 2,
        title: 'Family Portraits',
        coverImage: 'assets/images/album2.jpg',
        description: 'Classic family portraits captured with love and care.',
        events: ['Family Portraits', 'Newborn Photography', 'Pet Photography']
      },
      {
        id: 3,
        title: 'Event Photography',
        coverImage: 'assets/images/album1.jpg',
        description: 'Capturing the essence of your events with stunning photographs.',
        events: ['Corporate Events', 'Product Photography', 'Conferences', 'Workshops']
      },
      {
        id: 4,
        title: 'Birthday Parties',
        coverImage: 'assets/images/album2.jpg',
        description: 'Capture the joy and excitement of birthday celebrations.',
        events: ['Birthday Parties', 'Children’s Parties', 'Themed Parties']
      },
      {
        id: 5,
        title: 'Graduation Photography',
        coverImage: 'assets/images/album1.jpg',
        description: 'A memorable collection of your graduation day.',
        events: ['Graduations', 'Family Gatherings', 'Commencement Ceremonies']
      },
      {
        id: 6,
        title: 'Sports Photography',
        coverImage: 'assets/images/album2.jpg',
        description: 'Freeze the action with professional sports photography.',
        events: ['Sports Photography', 'Live Events', 'Action Shots']
      },
      {
        id: 7,
        title: 'Concert Photography',
        coverImage: 'assets/images/album1.jpg',
        description: 'Live music moments captured from your favorite concerts.',
        events: ['Concerts', 'Music Festivals', 'Live Performances']
      },
      {
        id: 8,
        title: 'Real Estate Photography',
        coverImage: 'assets/images/album2.jpg',
        description: 'Beautifully captured photos of properties for sale or rent.',
        events: ['Real Estate Photography', 'Property Listings', 'Interior Design']
      }
    ];
    
  }
 

  viewAlbum(albumId: number) {
    console.log(`Viewing album with ID: ${albumId}`);
    // Redirect to album page or show more details
  }
}
