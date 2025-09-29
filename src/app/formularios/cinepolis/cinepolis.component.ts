import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  standalone: false,
  templateUrl: './cinepolis.component.html',
  styleUrl: './cinepolis.component.css'
})
export class CinepolisComponent {
  //
  nombre: string = '';
  cantidadCompradores: number = 0;
  tieneTarjeta: boolean = false;
  cantidadBoletos: number = 0;

  //
  valorPagar: number = 0;

  constructor() { }


  procesar(): void {
    const precioBoleto: number = 12;//Aqui el precio del boleto que son $12
    const maxBoletosPorPersona: number = 7; //en esta variable damos los valores maximos de boletos


    if (this.cantidadBoletos > this.cantidadCompradores * maxBoletosPorPersona) {
      alert(`cada persona puede comprar un maximo de ${maxBoletosPorPersona} boletos. por favor revisa tu orden.`);
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
