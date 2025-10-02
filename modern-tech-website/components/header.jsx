"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Search, Menu, X, User } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              SOLE
              <span className="text-muted-foreground">STORE</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Men
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Women
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Kids
            </a>
            <a href="#" className="text-foreground hover:text-muted-foreground transition-colors">
              Sale
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-border">
              <a href="#" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Men
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Women
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Kids
              </a>
              <a href="#" className="block px-3 py-2 text-foreground hover:text-muted-foreground">
                Sale
              </a>
              <div className="flex items-center space-x-4 px-3 py-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    2
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
