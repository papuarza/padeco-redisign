import { Component, OnInit } from '@angular/core';
import { MailService } from 'src/app/service/mail.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  canal:any = '';
  mostrarOnline: Boolean = false;
  mostrarAmazon: Boolean = false;
  plataforma: any = '';
  facturacionTotal: any = '';
  nombre: String = "";
  email: String = "";
  telefono: String = "";
  web: String = "";
  actualmenteAmazon: any = "";
  plataformaAmazon: any = "";
  paisesAmazon: any = "";
  facturacionAmazon: any = "";
  mensaje: any = "";
  politica: Boolean;
  canales = ["", "Canal Online", "Canal Offline"];
  plataformas = ["", "Amazon", "ManoMano", "Ambas", "Otro"];
  actualmenteAmazonRespuesta = ["", "Si", "No"];
  plataformasAmazon = ["", "Vendor Central", "Seller Central", "Ambas"]
  paisesAmazonRespuesta = ["", "España", "UE", "US"]
  facturacionTotalRespuesta = ["","Hasta 1 millón €/año", "Hasta 3 millones €/año", "Hasta 10 millones €/año", "Hasta 50 millones €/año", "Hasta 300 millones €/año", "Más de 300 millones €/año", "Superior"]
  facturacionAmazonRespuesta = ["", "Hasta 12.000€/año", "Hasta 50.000€/año", "Hasta 200.000€/año", "Hasta 500.000€/año", "Hasta 1.000.000€/año", "Más de 5.000.000€/año",]
  constructor(public mailService: MailService) { }

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

 sendForm() {
   const body = {
     'nombre': this.nombre,
     'email': this.email,
     'telefono': this.telefono,
     'web': this.web,
     'facturacion': this.facturacionTotalRespuesta[this.facturacionTotal],
     'canal': this.canales[this.canal],
     'mensaje': this.mensaje,
   }
   if(this.plataforma != '') body['plataforma'] = this.plataformas[this.plataforma];
   if(this.actualmenteAmazon != '') body['actualmenteAmazon'] = this.actualmenteAmazonRespuesta[this.actualmenteAmazon];
   if(this.plataformaAmazon != '') body['plataformaAmazon'] = this.plataformasAmazon[this.plataformaAmazon];
   if(this.paisesAmazon != '') body['paisesAmazon'] = this.paisesAmazonRespuesta[this.paisesAmazon];
   if(this.facturacionAmazon != '') body['facturacionAmazon'] = this.facturacionAmazonRespuesta[this.facturacionAmazon];
   this.mailService.sendmail(body).subscribe(e => {
    this.nombre = '',
    this.email = '',
    this.web = '',
    this.telefono = '',
    this.facturacionTotal = '',
    this.canal = '',
    this.plataforma = '',
    this.mensaje = ''
  })
 }

}
