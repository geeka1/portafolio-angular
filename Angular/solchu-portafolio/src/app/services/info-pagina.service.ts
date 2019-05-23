import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  infoObjeto: InfoPagina  = {};

  cargada = false;

  constructor(private http:HttpClient) {
    console.log('Servicio Inyectado...')
    
    //Ahora leo el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp:InfoPagina) =>{
        this.cargada = true;
        this.infoObjeto = resp;
        console.log(resp.nombre_corto);
        console.log('Ahora viene todo el objeto...');
        console.log(this.infoObjeto);
        //console.log(resp);
        //console.log(resp['email']);
        //console.log(resp['titulo']);
      });
   }
}
