import { Component, OnInit } from '@angular/core';
import { Contacto } from '../Ejemplos/entidades/contacto';
import { ContactosService } from '../servicios/contactos.service';
import { ActivatedRoute } from '@angular/router';

//No nos hace falta selector porque no se va a añadir a ningún html, ya que se va a utilizar como una página
@Component({
    templateUrl: './mis-contactos.component.html'
})
export class MisContactosComponent implements OnInit {

     listaContactos: Contacto[];
  contactoSeleccionado: Contacto;


  constructor( private _contactosService: ContactosService,
                private _activatedRoute: ActivatedRoute) {}


ngOnInit(): void {

  //   //Obtener contactos devuelve un observable de una lista de contactos
  //     this._contactosService.obtenerContactos()
  //     //AL hacer subscribe me quito de en medio el observable y me quedo con la lista de cotactos
  //     .subscribe(contactos => {
  //       this.listaContactos = contactos;
  //     });
  
  //Como se ha llevado a cabo un resolve al dirigirse a esta ruta, ya puedo coger la información de la ruta en 'data'
  //Estoy definiendo que 'data' es de tipo: Un objeto con un atributo contactos de tipo Contacto[]
  this._activatedRoute.data.forEach((data: { contactos: Contacto[]}) => {
    this.listaContactos = data.contactos;
  });
   }


   mostrarDetalles(contacto: Contacto): void {
    this.contactoSeleccionado = contacto;

  }

  navegarRuta(ruta: string): void {
    console.log('navegar', ruta);
    window.open(ruta, '_blank');
  }

  eliminarContacto(contacto: Contacto) {
    if(confirm(`¿Estás seguro que quieres eliminar a ${contacto.nombre}`)) {
      this._contactosService
      .eliminarContacto(contacto)
      .subscribe(() => {
        // Eliminamos el contacto de this.listaContactos
        const indice: number = 
        this.listaContactos
        .findIndex((element: Contacto) => {
            return element.id === contacto.id;
        });
        if(indice != -1) {
          // Lo elimino de la lista
          this.listaContactos.splice(indice, 1);

          // Lo quito de seleccionado
          this.contactoSeleccionado = null;
          }
      });
    }
  }
}