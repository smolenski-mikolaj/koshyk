import "dotenv/config";

const mode = process.env.NODE_ENV || "development";

export default {
  host:
    process.env.NODE_ENV === "development"
      ? (process.env.DEV_HOST as string)
      : (process.env.PRD_HOST as string),
  database:
    process.env.NODE_ENV === "development"
      ? (process.env.DEV_DATABASE as string)
      : (process.env.PRD_DATABASE as string),
  user:
    process.env.NODE_ENV === "development"
      ? (process.env.DEV_USER as string)
      : (process.env.PRD_USER as string),
  password:
    process.env.NODE_ENV === "development"
      ? (process.env.DEV_PASSWORD as string)
      : (process.env.PRD_PASSWORD as string),
  origin:
    process.env.NODE_ENV === "development"
      ? (process.env.DEV_ORIGIN as string)
      : (process.env.PRD_ORIGIN as string),
  googleClientId: process.env.GOOGLE_CLIENT_ID as string,
};
