export class LateCheckInValidationError extends Error {
  constructor() {
    super('O check in so pode ser validado até 20 minutos após a criação!')
  }
}
