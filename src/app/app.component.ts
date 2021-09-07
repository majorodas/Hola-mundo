import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent {
    titulo = 'Hola Mundo';
    count: number = 2100000;
    countidstudent() : void{
    //studentname = 'Cesar';
    //getstudentname (): string {
      this.count++;
    }}
  
  



