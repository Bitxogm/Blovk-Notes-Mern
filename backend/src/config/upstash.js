import {Ratelimit} from '@upstash/ratelimit';


import  {Redis} from '@upstash/redis';
import dotenv from "dotenv";

dotenv.config();
// create a ratelimiter that allows 10 request per 10s
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(10, "10s"),
});

export default ratelimit;