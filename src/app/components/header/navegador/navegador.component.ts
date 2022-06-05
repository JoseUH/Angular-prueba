import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.scss']
})
export class NavegadorComponent implements OnInit {

  public Home: string = "Home"
  public Gallery:string = "Gallery"
  public About: string = "About"

  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
