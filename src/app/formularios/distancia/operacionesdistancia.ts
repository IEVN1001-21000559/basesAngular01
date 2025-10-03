export class OperacionesDistancia {


  calcularDistancia(x1: number, y1: number, x2: number, y2: number): number {
    // Aplicamos la fórmula de la distancia entre dos puntos:

    const deltaX = x2 - x1;
    const deltaY = y2 - y1;

    // Calculamos los cuadrados de las diferencias
    const deltaXCuadrado = deltaX * deltaX;
    const deltaYCuadrado = deltaY * deltaY;

    // Sumamos los cuadrados y aplicamos la raíz cuadrada
    const distancia = Math.sqrt(deltaXCuadrado + deltaYCuadrado);

    // Redondeamos a un número de decimales, por ejemplo, 2.
    return parseFloat(distancia.toFixed(2));
  }
}
