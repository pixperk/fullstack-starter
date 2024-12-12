import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Database, Lock, Palette, Zap } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 text-amber-900">
      <main className="flex-1 relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-amber-100 overflow-hidden">
          <div className="absolute inset-0 opacity-50">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-amber-300 rounded-full"
                style={{
                  width: `${Math.random() * 40 + 10}px`,
                  height: `${Math.random() * 40 + 10}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>
        </div>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative z-10">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Zap className="h-12 w-12 text-amber-600" />
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Fullstack Starter Template
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Jumpstart your next project with our powerful tech stack: Next.js, tRPC, Tailwind CSS, shadcn/ui, and NextAuth.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-amber-600 text-white hover:bg-amber-700" asChild>
                  <Link href="#get-started">Get Started</Link>
                </Button>
                <Button variant="outline" className="text-amber-600 border-amber-600 hover:bg-amber-100" asChild>
                  <Link href="https://github.com/yourusername/fullstack-starter">View on GitHub</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Powerful Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Zap className="h-5 w-5" />
                    Next.js
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  React framework for production-grade applications with server-side rendering and static site generation.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Database className="h-5 w-5" />
                    tRPC
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  End-to-end typesafe APIs made easy. Connect your full-stack TypeScript applications seamlessly.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Palette className="h-5 w-5" />
                    Tailwind CSS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  A utility-first CSS framework for rapid UI development. Customize your designs with ease.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Code className="h-5 w-5" />
                    shadcn/ui
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Beautifully designed components built with Radix UI and Tailwind CSS. Fully accessible and customizable.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-amber-700">
                    <Lock className="h-5 w-5" />
                    NextAuth
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Authentication for Next.js made simple. Support for various providers and customizable to fit your needs.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Code Preview</h2>
            <div className="relative rounded-lg overflow-hidden max-w-3xl mx-auto">
              <pre className="language-typescript p-4 overflow-x-auto bg-amber-900 text-amber-50">
                <code>{`// pages/api/trpc/[trpc].ts
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { z } from 'zod';

const appRouter = trpc.router()
  .query('hello', {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    resolve({ input }) {
      return {
        greeting: \`Hello \${input?.text ?? 'world'}\`,
      };
    },
  });

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});`}</code>
              </pre>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose Our Starter?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Rapid Development</CardTitle>
                </CardHeader>
                <CardContent>
                  Get your project off the ground quickly with our pre-configured setup and best practices.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Type Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  Enjoy end-to-end type safety with TypeScript and tRPC, reducing bugs and improving developer experience.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Modern UI</CardTitle>
                </CardHeader>
                <CardContent>
                  Create beautiful, responsive interfaces with Tailwind CSS and shadcn/ui components.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Authentication Ready</CardTitle>
                </CardHeader>
                <CardContent>
                  Implement secure authentication flows easily with NextAuth, supporting various providers out of the box.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Scalable Architecture</CardTitle>
                </CardHeader>
                <CardContent>
                  Built on Next.js, our starter template is designed to scale with your project's needs.
                </CardContent>
              </Card>
              <Card className="bg-white border-amber-200">
                <CardHeader>
                  <CardTitle className="text-amber-700">Community Support</CardTitle>
                </CardHeader>
                <CardContent>
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Clone our repository and start building your next great idea with our Fullstack Starter Template.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <pre className="bg-amber-900 p-4 rounded-lg text-amber-50 text-sm overflow-x-auto">
                  <code>git clone https://github.com/pixperk/fullstack-starter.git</code>
                </pre>
                <Button className="w-full bg-amber-600 text-white hover:bg-amber-700" asChild>
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
      <footer className="w-full py-6 bg-amber-200">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col gap-2 sm:flex-row items-center justify-between">
            <p className="text-xs text-amber-800">© 2024 Fullstack Starter. All rights reserved.</p>
            <nav className="flex gap-4 sm:gap-6">
              <Link className="text-xs hover:underline underline-offset-4 text-amber-800" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:underline underline-offset-4 text-amber-800" href="#">
                Privacy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

