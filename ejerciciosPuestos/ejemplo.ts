class BancoTurnos {
  private cola: number[] = [];       // Cola de espera
  private contador: number = 0;      // Contador de turnos

  // Tomar un turno
  public tomarTurno(): number {
    this.contador++;
    this.cola.push(this.contador);
    console.log(`Turno tomado: ${this.contador}`);
    return this.contador;
  }

  // Llamar al siguiente cliente
  public llamarCliente(): number | null {
    if (this.cola.length === 0) {
      console.log("No hay clientes en la cola.");
      return null;
    }
    const turnoLlamado = this.cola.shift()!; // shift elimina el primero
    console.log(`Llamando al turno: ${turnoLlamado}`);
    return turnoLlamado;
  }

  // Mostrar la cola de espera
  public mostrarCola(): void {
    if (this.cola.length === 0) {
      console.log("La cola está vacía.");
    } else {
      console.log("Cola de espera:", this.cola.join(", "));
    }
  }

  // Mostrar contador de turnos
  public mostrarContador(): void {
    console.log(`Total de turnos tomados: ${this.contador}`);
  }
}