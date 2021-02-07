import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionpatient',
  templateUrl: './gestionpatient.component.html',
  styleUrls: ['./gestionpatient.component.css']
})
export class GestionpatientComponent implements OnInit {

  constructor() { }

  text:string="Ils ont besoin de vous !";

  perso_ColorRoseMenu:string ="perso_ColorRoseMenu";

  ngOnInit(): void {
  }

}
