import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
    return {
        database: {
            dbName: process.env.POSTGRES_DB,
            port: parseInt(process.env.POSTGRES_PORT, 10),
            password: process.env.DATABASE_PASSWORD,
            user: process.env.DATABASE_USER,
            host: process.env.DATABASE_HOST,
            name: process.env.DATABASE_NAME,
            port: process.env.DATABASE_PORT,
        }
    };
})
