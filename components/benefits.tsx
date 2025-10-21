import { Card, CardContent } from "@/components/ui/card"

const benefits = [
  {
    number: "01",
    title: "Increase Property Value",
    description: "A well-designed pool can increase your home value by up to 15%",
  },
  {
    number: "02",
    title: "Health & Wellness",
    description: "Swimming is a low-impact exercise perfect for all ages and fitness levels",
  },
  {
    number: "03",
    title: "Family Entertainment",
    description: "Create lasting memories with a backyard oasis for family and friends",
  },
  {
    number: "04",
    title: "Year-Round Enjoyment",
    description: "With heating options, enjoy your pool in any season",
  },
]

export function Benefits() {
  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Benefits of Pool Ownership</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            More than just a pool—it's an investment in your lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-2">
              <CardContent className="pt-6">
                <div className="flex gap-6">
                  <div className="text-5xl font-bold text-primary/20">{benefit.number}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
