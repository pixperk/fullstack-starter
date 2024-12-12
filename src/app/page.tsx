import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Lock, Palette, Zap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
                <Code className="h-12 w-12 text-blue-500" />
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Fullstack Starter Template
                </h1>
                <p className="max-w-[600px] text-gray-300 md:text-xl">
                  Jumpstart your next project with our powerful tech stack: Next.js, tRPC, Tailwind CSS, shadcn/ui, NextAuth, Prisma, and Redis.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <Link href="#get-started">Get Started</Link>
                  </Button>
                  <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-gray-800" asChild>
                    <Link href="https://github.com/yourusername/fullstack-starter">View on GitHub</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image
                  src="/illus.svg"
                  alt="Fullstack Starter Template Illustration"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Powerful Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Zap className="h-5 w-5" />
                    Next.js
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  React framework for production-grade applications with server-side rendering and static site generation.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Database className="h-5 w-5" />
                    tRPC
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  End-to-end typesafe APIs made easy. Connect your full-stack TypeScript applications seamlessly.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Palette className="h-5 w-5" />
                    Tailwind CSS
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  A utility-first CSS framework for rapid UI development. Customize your designs with ease.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Code className="h-5 w-5" />
                    shadcn/ui
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Beautifully designed components built with Radix UI and Tailwind CSS. Fully accessible and customizable.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Lock className="h-5 w-5" />
                    NextAuth
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Authentication for Next.js made simple. Support for various providers and customizable to fit your needs.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Database className="h-5 w-5" />
                    Prisma
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Next-generation ORM for Node.js and TypeScript.
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-400">
                    <Database className="h-5 w-5" />
                    Redis
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  In-memory data structure store, used as a database, cache and message broker.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Code Preview</h2>
            <pre className="language-typescript p-4 overflow-x-auto bg-gray-900 text-gray-100 rounded-lg">
              <code>{`// server/routers/user.ts
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';
import { prisma } from '../db';
import { redis } from '../redis';

export const userRouter = router({
  getUser: publicProcedure
    .input(z.string())
    .query(async ({ input: userId }) => {
      // Try to get user from Redis cache first
      const cachedUser = await redis.get(\`user:\${userId}\`);
      if (cachedUser) {
        return JSON.parse(cachedUser);
      }

      // If not in cache, fetch from database
      const user = await prisma.user.findUnique({
        where: { id: userId },
      });

      // Cache the user data in Redis
      if (user) {
        await redis.set(\`user:\${userId}\`, JSON.stringify(user), 'EX', 3600); // Cache for 1 hour
      }

      return user;
    }),
});`}</code>
            </pre>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Why Choose Our Starter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Rapid Development</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Get your project off the ground quickly with our pre-configured setup and best practices.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Type Safety</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Enjoy end-to-end type safety with TypeScript and tRPC, reducing bugs and improving developer experience.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Modern UI</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Create beautiful, responsive interfaces with Tailwind CSS and shadcn/ui components.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Authentication Ready</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Implement secure authentication flows easily with NextAuth, supporting various providers out of the box.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Built on Next.js, our starter template is designed to scale with your project's needs.
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-blue-400">Community Support</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Join a thriving community of developers using this tech stack, with plenty of resources and support available.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="get-started" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Clone our repository and start building your next great idea with our Fullstack Starter Template.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <pre className="bg-gray-800 p-4 rounded-lg text-gray-100 text-sm overflow-x-auto">
                  <code>git clone https://github.com/pixperk/fullstack-starter.git</code>
                </pre>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="https://github.com/pixperk/fullstack-starter">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Get Started on GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
            <p className="text-xs text-gray-300">© 2024 Fullstack Starter. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4 text-gray-300" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-gray-300" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

