import { Code, Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Code,
    title: "Developer First",
    description: "Built with developers in mind. Clean APIs, excellent documentation, and powerful tooling.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized for performance with modern build tools and efficient runtime execution.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Enterprise-grade security features built-in. Your data and users are always protected.",
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Deploy worldwide with edge computing and CDN integration for optimal user experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
            Everything you need to <span className="text-accent">succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Comprehensive tools and features designed to accelerate your development process and deliver exceptional
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border/40 bg-card/50 hover:bg-card transition-colors"
            >
              <div className="mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
