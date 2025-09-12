import { Component } from '@angular/core';

@Component({   // esto es un decorador 😯
  selector: 'app-root',
  templateUrl: './app.component.html', //Desde aqui se invoca el archivo html que lleva esta ruta
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hola Christian😎';
  duplicarNumero(valor:number):number{
    return valor*2;
  }

  pelicula={
    titulo:"El Padrino",
    anio:1972,
    genero:"Crimen/Drama"
  }



}


//Aqui ira toda la programación
