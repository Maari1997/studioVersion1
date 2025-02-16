import { CommonModule } from '@angular/common';
import { Component,HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SignInPopupComponent } from '../../Subcomponents/sign-in-popup/sign-in-popup.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatButtonModule,RouterLink,CommonModule,MatIconModule,SignInPopupComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isMobileMenuOpen = false; // Tracks mobile menu state
  isMobileView = false; // Tracks whether the screen size is mobile
  showSignInPopup: boolean = false;

  constructor() {
    this.checkViewport(); // Check viewport size on component initialization
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkViewport();
  }

  checkViewport() {
    this.isMobileView = window.innerWidth <= 768; // Adjust the breakpoint if needed
    if (!this.isMobileView) {
      this.isMobileMenuOpen = false; // Close mobile menu on larger screens
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  scrollTo(section: string) {
    const element = document.getElementById(section);
    if (element) {
      const yOffset =-142 // Adjust this value to the height of your toolbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }

    if (this.isMobileView) {
      this.isMobileMenuOpen = false; // Close menu on selection
    }
  }

  // Open the sign-in popup
  openSignInPopup() {
    this.showSignInPopup = true;
  }

  // Close the sign-in popup
  closeSignInPopup() {
    this.showSignInPopup = false;
  }
  
}
