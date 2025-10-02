import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">Stay in the loop</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Be the first to know about new arrivals, exclusive offers, and style tips delivered straight to your
              inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button type="submit">Subscribe</Button>
            </div>

            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe at any time. Read our{" "}
              <a href="#" className="underline hover:no-underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
