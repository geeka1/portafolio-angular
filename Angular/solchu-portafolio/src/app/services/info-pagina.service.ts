import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';



@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  infoObjeto: InfoPagina  = {};

  cargada = false;
  equipo: any[]=[];


  constructor(private http:HttpClient) {
    console.log('Servicio Inyectado...')
    this.cargarInfoLocal();
    this.cargarEquipoDesdeFirebase();
   }

   private cargarInfoLocal(){
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

    private cargarEquipoDesdeFirebase(){

        //Ahora leo el archivo JSON
    this.http.get('https://console.firebase.google.com/u/0/project/solchu-firebase/database/firestore/data~2Fequipo.json')
        .subscribe((resp:any[]) =>{
          this.equipo = resp;
          //console.log(resp);
          console.log('Ahora viene todo el objeto...');
          console.log(this.equipo);
          //console.log(resp);
          //console.log(resp['email']);
          //console.log(resp['titulo']);
        });
  }


}