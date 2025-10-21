import { Hero } from "@/components/hero"
import { PoolTypes } from "@/components/pool-types"
import { Features } from "@/components/features"
import { Gallery } from "@/components/gallery"
import { Benefits } from "@/components/benefits"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PoolTypes />
      <Features />
      <Gallery />
      <Benefits />
      <CTA />
      <Footer />
    </main>
  )
}
