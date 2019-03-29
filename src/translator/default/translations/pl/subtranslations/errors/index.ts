import { ACCOUNT_LOCKOUT_TIME_IN_MINUTES } from '../../../../../../constants';
import Errors from '../../../interfaces/Errors';

const errors: Errors = {
  accountLocked: () => `Zbyt wiele prób nieudanego logowania.
 Twoje konto zostało zablokowane na ${ACCOUNT_LOCKOUT_TIME_IN_MINUTES} minut`,
  expiredJwtToken: () => 'Token JWT utracił ważność',
  forbidden: () => 'Brak uprawnień',
  invalidCredentials: () => 'Niewłaściwy email i/lub password',
  invalidJwtToken: () => 'Niewłaściwy JWT token',
  missingJwtToken: () => 'Nieobecny JWT token',
  missingJwtTokenExtractor: () => 'Brak JWT token ekstraktor',
  serverError: () => 'Błąd serwera',
  unauthorized: () => 'Nieuwierzytelniony',
  unverifiedAccount: () =>
    'Konto nie zostało jeszcze zweryfikowane. Sprawdź swoją skrzynkę odbiorczą email i zweryfikuj swoje konto klikając w link',
};

export default errors;
