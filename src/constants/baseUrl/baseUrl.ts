export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? process.env['NEXT_PUBLIC_BACKEND_URL'] ?? 'http://localhost:4010'
    : 'http://localhost:8000';
