import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'sashinao2';
  

  
   name: string = "John";
   lastName: string = "Doe";
  

   isVisible: boolean = true;

   toggleVisibility() {
     this.isVisible = !this.isVisible;
   }
 }








