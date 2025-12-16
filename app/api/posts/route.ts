import { prisma } from "@/lib/prisma"
import { NextResponse } from "next/server"

// CREATE
export async function POST(req: Request) {
  const body = await req.json()
  const post = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
    },
  })
  return NextResponse.json(post)
}

// READ
export async function GET() {
  const posts = await prisma.post.findMany()
  return NextResponse.json(posts)
}
