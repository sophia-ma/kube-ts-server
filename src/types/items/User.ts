import BaseItem, { NullableDate } from './BaseItem';

export enum GenderType {
  female = 'female',
  male = 'male',
}

export default interface User extends BaseItem {
  readonly email: string;
  readonly password: string;
  readonly firstName?: string;
  readonly lastName?: string;
  readonly bio?: string;
  readonly dateOfBirth?: NullableDate;
  readonly gender?: GenderType;
  readonly verifiedAt?: NullableDate;
  readonly deletedAt?: NullableDate;
  readonly loginFailedAttempts?: number;
  readonly loginLastAttemptAt?: NullableDate;
  readonly accountLockoutExpiresAt?: NullableDate;
  readonly verifyToken?: string;
}
