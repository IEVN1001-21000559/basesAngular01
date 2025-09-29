import { Component } from '@angular/core';
import { OperacionesResistencias } from './operacionesResistencias';

@Component({
  selector: 'app-resistencias',  //Esta etiqueta se usa en otro archivo para mostrar este componente en la web
  standalone: false,
  templateUrl: './resistencias.component.html',  //Etiqueta HTML de la visualización igual en la web
  styleUrl: './resistencias.component.css' //Estilos de visualización colores, formas etc.
})
export class ResistenciasComponent {
  // Variables para los valores seleccionados en los radio botones
  color1Seleccionado: string = '';
  color2Seleccionado: string = '';
  color3Seleccionado: string = '';
  toleranciaSeleccionada: string = '';

  // Variables para los resultados que se mostrarán en la tabla
  valorResistencia: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;



  calcular(): void {
    // Usamos la clase 'OperacionesResistencias' para hacer los cálculos
    // Y le pasamos los valores que se seleccionaron en la interfaz
    const resultados = OperacionesResistencias.calcularResistencia(
      this.color1Seleccionado,
      this.color2Seleccionado,
      this.color3Seleccionado,
      this.toleranciaSeleccionada
    );

    // Asignamos los valores devueltos por la clase a las variables del componente
    this.valorResistencia = resultados.valor;
    this.valorMaximo = resultados.valorMax;
    this.valorMinimo = resultados.valorMin;
  }
}
