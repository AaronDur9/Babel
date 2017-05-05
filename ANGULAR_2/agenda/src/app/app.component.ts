import { Component, OnInit } from '@angular/core';
import { Contacto } from './Ejemplos/entidades/contacto';
import { ContactosService } from './servicios/contactos.service';

//Con [] puedo añadir o modificar propiedades de los elementos.
//Con () me subscribo a un evento concreto del elemento.
@Component({
  selector: 'my-app',
  templateUrl: '/app/app.component.html'
})
export class AppComponent implements OnInit { 

  listaContactos: Contacto[];
  contactoSeleccionado: Contacto;

  //Es necesario pasar por parámetro al constructor los servicios para poder utilzarlos
  constructor(private _contactosService: ContactosService) {
    
  }

  ngOnInit(): void {
    //Obtener contactos devuelve un observable de una lista de contactos
      this._contactosService.obtenerContactos()
      //AL hacer subscribe me quito de en medio el observable y me quedo con la lista de cotactos
      .subscribe(contactos => {
        this.listaContactos = contactos;
      });
  }

  mostrarDetalles(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;

  }

  navegarRuta(ruta: string): void {
    console.log('navegar', ruta);
    window.open(ruta, '_blank');
  }


  guardarContacto(contacto: Contacto): void {
    this._contactosService.guardarContacto(contacto)
    .subscribe(contacto => {});
  }


 }
