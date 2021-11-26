import { Sequelize } from 'sequelize';

const db_name = process.env.DB_NAME as string;
const db_user = process.env.DB_USER as string;
const db_pass = process.env.DB_PASS as string;
const db_port = Number(process.env.DB_PORT);

export const db = new Sequelize(
    db_name,
    db_user,
    db_pass,
    {
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: db_port
    }
);