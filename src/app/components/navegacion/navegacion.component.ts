import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {
  isMenuCollapsed:any=true
  
  constructor() { }
  
  ngOnInit(): void {
  }

  get public() { 
    return this.isMenuCollapsed 
  }

}
