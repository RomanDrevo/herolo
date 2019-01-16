export default class ApiError extends Error {
  constructor(message, errorCode, innerError) {
    super(message)
    this.errorCode = errorCode
    this.stack = innerError ? innerError.stack : null
  }
}
