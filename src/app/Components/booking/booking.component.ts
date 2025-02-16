import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatIcon,CommonModule,MatButtonModule,MatButtonModule ,MatFormFieldModule,MatInputModule,
    MatSelectModule,MatDatepickerModule,MatNativeDateModule,MatCardModule,ReactiveFormsModule
   ],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingForm: FormGroup;
  timeSlots: string[] = ['10:00 AM - 11:00 AM', '12:00 PM - 1:00 PM', '2:00 PM - 3:00 PM', '4:00 PM - 5:00 PM'];

  constructor(private fb: FormBuilder,private router:Router) {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      message: ['']
    });
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      console.log('Booking Details:', this.bookingForm.value);
      alert('Your session has been booked successfully!');
      this.bookingForm.reset();
    }
  }
goBack(){
  this.router.navigate(['/']);
}
}
