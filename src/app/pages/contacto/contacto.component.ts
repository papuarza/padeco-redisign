import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  canal:String = 'Seleccione...';
  mostrarOnline: Boolean = false;
  mostrarAmazon: Boolean = false;
  plataforma: String = 'Seleccione...';
  constructor() { }

  ngOnInit() {
  }

  canalSeleccionado(valor) {
     if(valor == '1') {
       this.mostrarOnline = true;
     } else {
       this.mostrarOnline = false;
     }
  }

  plataformaSeleccionada(valor) {
    if(valor == '1' || valor == '3') {
      this.mostrarAmazon = true;
    } else {
      this.mostrarAmazon = false;
    }
 }

}
