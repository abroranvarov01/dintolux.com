import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function CTA() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center bg-primary text-primary-foreground rounded-2xl p-12 md:p-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Ready to Make a Splash?</h2>
          <p className="text-xl mb-8 text-balance opacity-90">
            Get a free consultation and quote for your dream pool today
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-primary-foreground text-foreground flex-1"
            />
            <Button size="lg" variant="secondary" type="submit">
              Get Started
            </Button>
          </form>

          <p className="text-sm mt-6 opacity-75">No spam, just pool inspiration and exclusive offers</p>
        </div>
      </div>
    </section>
  )
}
