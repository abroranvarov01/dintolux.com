import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/luxury-swimming-pool-with-crystal-clear-blue-water.jpg" alt="Luxury swimming pool" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance text-foreground">
          Dive Into Luxury
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-balance text-foreground/90">
          Transform your backyard into a stunning oasis with our premium water pool solutions
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg">
            Explore Pools
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg bg-transparent">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
