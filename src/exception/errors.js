export class BlankTextInputError extends Error {
  constructor({ fieldName }) {
    super(`BlankTextInputError: ${fieldName}`);
    this.fieldName = fieldName;
  }
}

export class NoAccessTokenError extends Error {
  constructor() {
    super(`NoAccessTokenError`);
  }
}

export class NoRefreshTokenError extends Error {
  constructor() {
    super(`NoAccessTokenError`);
  }
}

export class TokenReissueError extends Error {
  constructor() {
    super(`TokenReissueError`);
  }
}
