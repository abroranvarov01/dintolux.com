import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const poolTypes = [
  {
    title: "Infinity Pools",
    description: "Experience the illusion of water extending to the horizon with our stunning infinity edge designs",
    image: "/modern-infinity-pool-overlooking-ocean.jpg",
  },
  {
    title: "Lap Pools",
    description: "Perfect for fitness enthusiasts, our lap pools combine functionality with elegant design",
    image: "/sleek-lap-pool-in-modern-backyard.jpg",
  },
  {
    title: "Natural Pools",
    description: "Eco-friendly pools that blend seamlessly with your landscape using natural filtration",
    image: "/natural-swimming-pool-with-plants-and-rocks.jpg",
  },
  {
    title: "Plunge Pools",
    description: "Compact luxury for smaller spaces, perfect for cooling off and relaxation",
    image: "/small-plunge-pool-in-urban-courtyard.jpg",
  },
]

export function PoolTypes() {
  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Pool Types</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Discover the perfect pool design to match your lifestyle and space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {poolTypes.map((pool, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pool.image || "/placeholder.svg"}
                  alt={pool.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{pool.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{pool.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
