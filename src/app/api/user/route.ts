import { redis } from "@/lib/redis";
import { prisma } from "@/prisma";

export async function GET() {
  try {
    const cached = await redis.get("user");
    if (cached) {
      console.log("cached user");
      return new Response(cached);
    }
    const user = await prisma.user.findFirst();
    if (!user) return new Response("User not found");
    await redis.set("user", JSON.stringify(user)); 
    console.log("db call");
   

    return new Response(JSON.stringify(user));
  } catch (e) {
    console.log("no user");
    return new Response("User not found");
  }
}
