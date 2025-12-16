import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const posts = [
  {
    title: "Alice",
    content: "alice@prisma.io",
  
  },
  {
    title: "Bob",
    content: "bob@prisma.io",
   
  },
];

export async function main() {
  for (const u of posts) {
    await prisma.post.create({ data: u });
  }
}

main();