import { Droplets, Sparkles, Leaf, Shield } from "lucide-react"

const features = [
  {
    icon: Droplets,
    title: "Crystal Clear Water",
    description: "Advanced filtration systems ensure pristine water quality year-round",
  },
  {
    icon: Sparkles,
    title: "Smart Technology",
    description: "Control temperature, lighting, and cleaning with smart automation",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Energy-efficient pumps and sustainable materials reduce environmental impact",
  },
  {
    icon: Shield,
    title: "Built to Last",
    description: "Premium materials and expert craftsmanship guarantee decades of enjoyment",
  },
]

export function Features() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Why Choose Our Pools</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Innovation and quality in every detail
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
