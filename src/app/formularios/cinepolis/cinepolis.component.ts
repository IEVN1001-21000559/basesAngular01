import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  // Input variables linked to the HTML form
  nombre: string = '';
  cantidadCompradores: number = 0;
  tieneTarjeta: boolean = false;
  cantidadBoletos: number = 0;

  // Output variable for the calculated price
  valorPagar: number = 0;

  constructor() { }


  procesar(): void {
    const precioBoleto: number = 12;
    const maxBoletosPorPersona: number = 7;


    if (this.cantidadBoletos > this.cantidadCompradores * maxBoletosPorPersona) {
      alert(`Each person can buy a maximum of ${maxBoletosPorPersona} tickets. Please review your order.`);
      this.valorPagar = 0;
      return;
    }


    let costoTotal: number = this.cantidadBoletos * precioBoleto;


    if (this.cantidadBoletos > 5) {

      costoTotal *= 0.85;
    } else if (this.cantidadBoletos >= 3) {

      costoTotal *= 0.90;
    }

    if (this.tieneTarjeta) {
      costoTotal *= 0.90;
    }

    this.valorPagar = costoTotal;
  }

  
  salir(): void {
    this.nombre = '';
    this.cantidadCompradores = 0;
    this.tieneTarjeta = false;
    this.cantidadBoletos = 0;
    this.valorPagar = 0;
  }
}
