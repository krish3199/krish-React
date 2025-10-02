import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Star } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: "$129",
    originalPrice: "$159",
    rating: 4.8,
    reviews: 124,
    image: "/white-minimalist-sneakers.png",
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Urban Runner Pro",
    price: "$189",
    rating: 4.9,
    reviews: 89,
    image: "/modern-running-shoes-black.jpg",
    badge: "New",
  },
  {
    id: 3,
    name: "Leather Loafers",
    price: "$249",
    rating: 4.7,
    reviews: 156,
    image: "/brown-leather-loafers-elegant.jpg",
    badge: null,
  },
  {
    id: 4,
    name: "High-Top Canvas",
    price: "$89",
    originalPrice: "$119",
    rating: 4.6,
    reviews: 203,
    image: "/canvas-high-top-sneakers-vintage.jpg",
    badge: "Sale",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">Featured Collection</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Handpicked favorites that combine timeless design with modern comfort
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer border-border hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.badge && (
                    <span
                      className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded-full ${
                        product.badge === "Sale"
                          ? "bg-destructive text-destructive-foreground"
                          : product.badge === "New"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {product.badge}
                    </span>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-muted-foreground transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1 mt-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    <Button size="sm" variant="outline">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
