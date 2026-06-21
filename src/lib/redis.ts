import dotenv from "dotenv";
import Redis from "ioredis";
import logger from "./logger";
dotenv.config();

const redis = new Redis(process.env.REDIS_URL as string);
redis.on("connect", () => {
  logger.info("🚀 Redis connected successfully");
});

redis.on("error", (err) => {
  logger.error("❌ Redis connection error:", err);
});

export default redis;
