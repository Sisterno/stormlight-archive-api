import { config } from "dotenv";
config();

const config_var = {
    dev: <string> process.env.NODE_ENV !== 'production',
    port: <string> process.env.PORT,
    cors: <string> process.env.CORS,
    dbname: <string> process.env.DB_NAME,
    dbuser: <string> process.env.DB_USER,
    dbhost: <string> process.env.DB_HOST,
    dbpassword: <string> process.env.DB_PASSWORD,
} ;
export {config_var};