import ConflictError from "../../../../utils/errors/http/ConflictError";

export default interface ErrorsTranslations {
  readonly accountLocked: () => string;
  readonly conflict: (error: ConflictError) => string;
  readonly expiredJwtToken: () => string;
  readonly invalidJwtToken: () => string;
  readonly invalidResetPasswordtoken: () => string;
  readonly invalidVerifyAccountToken: () => string;
  readonly accountAlreadyVerified: () => string;
  readonly expiredResetPasswordtoken: () => string;
  readonly missingJwtToken: () => string;
  readonly missingJwtTokenExtractor: () => string;
  readonly unauthorized: () => string;
  readonly forbidden: () => string;
  readonly serverError: () => string;
  readonly invalidCredentials: () => string;
  readonly unverifiedAccount: () => string;
  readonly unsupportedMediaType: () => string;
}
