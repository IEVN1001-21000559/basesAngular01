export class OperacionesResistencias {

  static calcularResistencia(color1: string, color2: string, color3: string, toleranciaColor: string) {

    // Base de datos de colores, valores y multiplicadores
    const colores = [
      { nombre: 'negro', valor: 0, multiplicador: 1, tolerancia: NaN },
      { nombre: 'cafe', valor: 1, multiplicador: 10, tolerancia: 0.01 },
      { nombre: 'rojo', valor: 2, multiplicador: 100, tolerancia: 0.02 },
      { nombre: 'naranja', valor: 3, multiplicador: 1000, tolerancia: NaN },
      { nombre: 'amarillo', valor: 4, multiplicador: 10000, tolerancia: NaN },
      { nombre: 'verde', valor: 5, multiplicador: 100000, tolerancia: 0.005 },
      { nombre: 'azul', valor: 6, multiplicador: 1000000, tolerancia: 0.0025 },
      { nombre: 'violeta', valor: 7, multiplicador: 10000000, tolerancia: 0.001 },
      { nombre: 'gris', valor: 8, multiplicador: 100000000, tolerancia: 0.0005 },
      { nombre: 'blanco', valor: 9, multiplicador: 1000000000, tolerancia: NaN },
      { nombre: 'dorado', valor: NaN, multiplicador: 0.1, tolerancia: 0.05 },
      { nombre: 'plata', valor: NaN, multiplicador: 0.01, tolerancia: 0.10 }
    ];

    // Buscar los valores de los colores seleccionados
    const banda1 = colores.find(c => c.nombre === color1);
    const banda2 = colores.find(c => c.nombre === color2);
    const banda3 = colores.find(c => c.nombre === color3);
    const tolerancia = colores.find(c => c.nombre === toleranciaColor);

    if (!banda1 || !banda2 || !banda3 || !tolerancia) {
      return { valor: 0, valorMax: 0, valorMin: 0 };
    }

    // Calcular el valor de la resistencia
    const valorResistencia = (banda1.valor * 10 + banda2.valor) * banda3.multiplicador;
    const valorTolerancia = valorResistencia * tolerancia.tolerancia;
    const valorMaximo = valorResistencia + valorTolerancia;
    const valorMinimo = valorResistencia - valorTolerancia;

    return {
      valor: valorResistencia,
      valorMax: valorMaximo,
      valorMin: valorMinimo
    };
  }
}
