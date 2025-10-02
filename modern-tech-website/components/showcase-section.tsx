import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern shopping experience with real-time inventory and seamless checkout.",
    image: "/modern-ecommerce-dashboard.png",
    tech: ["React", "Next.js", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization with interactive charts and insights.",
    image: "/analytics-dashboard-dark-theme.png",
    tech: ["TypeScript", "D3.js", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Chat Interface",
    description: "Intelligent conversational AI with natural language processing.",
    image: "/ai-chat-interface-modern-design.jpg",
    tech: ["React", "OpenAI", "WebSocket"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-20 sm:py-32 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
            Explore some of the amazing projects built with our technology stack. Each one showcases different
            capabilities and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border/40 rounded-lg overflow-hidden hover:border-accent/50 transition-colors"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
