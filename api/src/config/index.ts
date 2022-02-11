import "dotenv/config";

export default {
  port: process.env.API_PORT as string,
  host: process.env.HOST as string,
  database: process.env.DATABASE as string,
  user: process.env.USER as string,
  password: process.env.PASSWORD as string,
  origin: process.env.ORIGIN as string,
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
};
