class CustomError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

class InvalidPasswordError extends CustomError {
  constructor(message: string = 'Invalid password') {
    super(message);
  }
}

class MissingParameterError extends CustomError {
  constructor(message: string = 'Missing required parameter') {
    super(message);
  }
}

class FetchURLError extends CustomError {
  constructor(message: string = 'Failed to fetch the URL') {
    super(message);
  }
}

class OpenAIError extends CustomError {
  constructor(message: string = 'Failed to fetch OpenAI response') {
    super(message);
  }
}

export { InvalidPasswordError, MissingParameterError, FetchURLError, OpenAIError };
