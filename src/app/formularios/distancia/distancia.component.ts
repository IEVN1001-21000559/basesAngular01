import { Component } from '@angular/core';
import { OperacionesDistancia } from './operacionesdistancia'; // esta es mi clase

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.component.html',
  styleUrl: './distancia.component.css'
})
export class DistanciaComponent {
  operacion = new OperacionesDistancia();

  // Variables para almacenar las coordenadas
  x1: number = 0;
  y1: number = 0;
  x2: number = 0;
  y2: number = 0;

  // Variable para almacenar el resultado
  distancia: number = 0;


  calcular(): void {
    // Usamos el objeto 'operacion' (la instancia) para llamar al método.
    this.distancia = this.operacion.calcularDistancia(
      this.x1,
      this.y1,
      this.x2,
      this.y2
    );
  }
}
