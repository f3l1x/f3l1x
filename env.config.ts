const ENV = process.env.APP_ENV || 'development';

export default {
  APP_URL: (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) || process.env.APP_URL || "http://localhost:3000",
  APP_ENV: ENV,
  APP_DEV: ENV === 'development',
  APP_PROD: ENV === 'production',
  APP_STATIC_URL: 'https://f3l1x.io',
  SENTRY_DSN: process.env.SENTRY_DSN || "https://d922e344cb624319898c49880e8eae01@o927410.ingest.sentry.io/5944436",
  AXIOS_DEV: process.env.AXIOS_DEV || false,
  IMAGEKIT_URL: process.env.IMAGEKIT_URL || "https://ik.imagekit.io/felix",
}
