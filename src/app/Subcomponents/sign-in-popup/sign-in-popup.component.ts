import { Component,Input,Output,EventEmitter,HostListener} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthserviceService } from '../../Services/authservice.service';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-sign-in-popup',
  standalone: true,
  imports: [MatIconModule,FormsModule],
  templateUrl: './sign-in-popup.component.html',
  styleUrl: './sign-in-popup.component.css'
})
export class SignInPopupComponent {
  username:string="";
  password:string="";
  @Input() isVisible: boolean = false;
  @Output() closePopup = new EventEmitter<void>();

  constructor(private authService:AuthserviceService){}

  onClose() {
    this.closePopup.emit();
  }

  @HostListener('document:click', ['$event'])
    onClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  if (!target.closest('.popup-content')) {
    this.onClose();
  }

  
   }

   onSubmit():void{
   this.authService.login(this.username,this.password).subscribe((isLoggodin)=>{
    if(isLoggodin){
      this.authService.redirectToDashboard()
    }
    else{
      alert("Invalid username or password")
    }
   })
   }
}
