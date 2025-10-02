import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Step into
                <span className="block text-muted-foreground">exceptional style</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md text-pretty">
                Discover our curated collection of premium footwear designed for comfort, style, and every step of your
                journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-muted rounded-2xl overflow-hidden elegant-shadow">
              <img
                src="/premium-sneakers-on-minimal-background.jpg"
                alt="Premium sneakers collection"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-4 elegant-shadow">
              <div className="text-sm font-medium text-foreground">Free Shipping</div>
              <div className="text-xs text-muted-foreground">On orders over $100</div>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-4 elegant-shadow">
              <div className="text-sm font-medium text-foreground">30-Day Returns</div>
              <div className="text-xs text-muted-foreground">Hassle-free policy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
