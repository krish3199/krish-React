import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="gradient-bg absolute inset-0 rounded-2xl" />
          <div className="relative bg-card/50 border border-border/40 rounded-2xl p-8 sm:p-12 lg:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
              Ready to build something <span className="text-accent">amazing?</span>
            </h2>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto mb-8">
              Join thousands of developers who are already building the future with our platform. Start your journey
              today with our free tier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Building Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-border/40 bg-transparent">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
