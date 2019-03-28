import Errors from '../../../interfaces/Errors';

const errorsTranslations: Errors = {
  expiredJwtToken: () => 'Expired JWT token',
  forbidden: () => 'Forbidden',
  invalidCredentials: () => 'Invalid email and/or password',
  invalidJwtToken: () => 'Invalid JWT token',
  missingJwtToken: () => 'Missing JWT token',
  missingJwtTokenExtractor: () => 'Missing JWT token extractor',
  serverError: () => 'Server error',
  unauthorized: () => 'Unauthorized',
  unverifiedAccount: () =>
    'Account unverified. Please verify you email by clicking an email you received from us',
};

export default errorsTranslations;
