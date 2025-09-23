import { Component } from '@angular/core'; //Importa la clase base 'component' de Angular, necesaria para definir el componente.

@Component({ //esto es un decorador que identifica la clase como un componente de Angular
  selector: 'app-operas-bas', //Es el nombre de la etiqueta HTML para usar este componente.
  standalone: false,
  templateUrl: './operas-bas.component.html', //Ruta al archivo HTML que define la interfaz de usuario
  styleUrl: './operas-bas.component.css' //Ruta al archivo CSS para estilos del componente.
})
export class OperasBasComponent { //Define la clase que contiene la lógica del componente.
  num1: string = '';
  num2: string = '';
  resultado: number = 0;


  operacionSeleccionada: string = 'suma';

  calcular(): void {
    const n1 = parseFloat(this.num1);
    const n2 = parseFloat(this.num2);


    switch (this.operacionSeleccionada) {
      case 'suma':
        this.resultado = n1 + n2;
        break;
      case 'resta':
        this.resultado = n1 - n2;
        break;
      case 'multiplicacion':
        this.resultado = n1 * n2;
        break;
      case 'division':
        if (n2 !== 0) {
          this.resultado = n1 / n2;
        } else {
          alert('No se puede dividir por cero.');
          this.resultado = NaN;
        }
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
