import { env } from '../utils/env';

export const FROM_ADDRESS = env('NEXT_PRIVATE_SMTP_FROM_ADDRESS') || 'noreply@ses.0xmetalabs.com';
export const FROM_NAME = env('NEXT_PRIVATE_SMTP_FROM_NAME') || '0xDocHub - 0xMetaLabs';

export const SERVICE_USER_EMAIL = 'serviceaccount@0xmetalabs.com';

export const EMAIL_VERIFICATION_STATE = {
  NOT_FOUND: 'NOT_FOUND',
  VERIFIED: 'VERIFIED',
  EXPIRED: 'EXPIRED',
  ALREADY_VERIFIED: 'ALREADY_VERIFIED',
} as const;
