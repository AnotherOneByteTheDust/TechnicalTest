import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: {
      driver: process.env.DB_DRIVER,
      port: process.env.DB_PORT,
      databaseName: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USER,
      host: process.env.DB_HOST,
    },
  };
});
