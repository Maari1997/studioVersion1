import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',loadComponent:()=>import('./Components/home/home.component').then((m)=>m.HomeComponent)
    },
    {
        path:'signin',loadComponent:()=>import('./Components/sign-in/sign-in.component').then((m)=>m.SignInComponent)
    }
    ,
    {
        path:'book',loadComponent:()=>import('./Components/booking/booking.component').then((m)=>m.BookingComponent)
    },
    {
        path:'admindashboard',loadComponent:()=>import('./Components/admindashboard/admindashboard.component').then((m)=>m.AdmindashboardComponent)
    }
];
