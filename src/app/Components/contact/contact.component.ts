import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIcon,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  contactInfo:any[]=[];
ngOnInit(): void {
  this.contactInfo = [
    {
      icon: 'phone',
      label: 'Phone',
      detail: '9989989984',
    },
    {
      icon: 'email',
      label: 'Email',
      detail: 'contact@photostudio.com',
    },
    {
      icon: 'location_on',
      label: 'Address',
      detail: '123 Studio Lane, Photography City, PC 12345',
    },
  ];
}
scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
}
