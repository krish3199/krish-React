import { Button } from "@/components/ui/button"

const categories = [
  {
    name: "Athletic",
    description: "Performance meets style",
    image: "/athletic-running-shoes-collection.jpg",
    count: "120+ styles",
  },
  {
    name: "Casual",
    description: "Everyday comfort",
    image: "/casual-sneakers-lifestyle.jpg",
    count: "85+ styles",
  },
  {
    name: "Formal",
    description: "Professional elegance",
    image: "/formal-dress-shoes-leather.jpg",
    count: "45+ styles",
  },
]

export function CategorySection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Find the perfect pair for every occasion and lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-card elegant-shadow hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="space-y-2">
                  <div className="text-sm opacity-90">{category.count}</div>
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>

                <Button
                  variant="secondary"
                  className="mt-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                >
                  Shop {category.name}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
