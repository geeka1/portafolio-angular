import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'solchu-portafolio';
  constructor(public _infoPaginaService:InfoPaginaService){

    //Aqui se va a leer el archivo json q tiene la data global
    

  }
}
