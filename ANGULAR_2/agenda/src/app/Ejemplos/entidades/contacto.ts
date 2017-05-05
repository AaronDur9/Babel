//Representa una entidad contacto
export class Contacto {
    

    // método estático (de la clase Contacto)
    static desdeJSON(json: any): Contacto {
        return new Contacto(json.id, 
        json.nombre, 
        json.apellidos, 
        json.email, 
        json.telefono, 
        json.twitter, 
        json.facebook, 
        json.avatar);
    }
    
    
    constructor(
        public id: number, 
        public nombre: string,
        public apellidos: string,
        public email:string,
        public telefono:string,
        public twitter: string,
        public facebook: string,
        public avatar: string = ''
        
    ){}



    //Método de instancia (lo tienen todas las instancias de contacto)

    generarRutaFacebook(): string {
        return this.facebook ? `https://facebook.com/${this.facebook}` : null;
    }

    generarRutaTwitter(): string {
        return this.twitter ? `https://twitter.com/${this.twitter}` : null;
    }
}