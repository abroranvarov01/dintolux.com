export function Gallery() {
  const images = [
    "/luxury-backyard-pool-with-lounge-chairs.jpg",
    "/modern-pool-with-waterfall-feature.jpg",
    "/pool-with-underwater-lighting-at-night.jpg",
    "/family-enjoying-pool-party.jpg",
    "/pool-with-spa-and-hot-tub.jpg",
    "/rooftop-infinity-pool-city-view.jpg",
  ]

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Inspiration Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Explore our portfolio of stunning pool installations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg group">
              <img
                src={image || "/placeholder.svg"}
                alt={`Pool gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
