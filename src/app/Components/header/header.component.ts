import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthserviceService } from '../../Services/authservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isLoggedIn:boolean=false;
  constructor(private authservice:AuthserviceService){

  }

  ngOnInit(): void {
    this.isLoggedIn=this.authservice.getIsLoggedIn();
  }
  LogOut():void{
    this.authservice.logout();
  }

}
