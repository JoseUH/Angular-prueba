import { Component, OnInit } from '@angular/core';
import { Iobjeto } from 'src/app/interfaces/iobjeto';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  
  public objeto!: Iobjeto;

  constructor() { this.objeto = {

    name: "Luis",
    age: 35,
    pais:"España",
    alive: true,
    
  }
 }

  ngOnInit(): void {
  }

}
