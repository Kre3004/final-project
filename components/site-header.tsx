"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "Introduction", href: "#introduction" },
    { name: "Khmer Rouge", href: "#khmer-rouge" },
    { name: "Timeline", href: "#timeline" },
    { name: "Statistics", href: "#statistics" },
    { name: "Causes", href: "#causes" },
    { name: "Human Toll", href: "#human-toll" },
    { name: "S-21 Prison", href: "#s21-prison" },
    { name: "Survivor Testimonies", href: "#testimonies" },
    { name: "Starvation as a Weapon", href: "#starvation" },
    { name: "Aftermath", href: "#aftermath" },
    { name: "References", href: "#references" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">{/* Empty div to maintain spacing */}</div>
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white" size="icon">
                <Menu className="h-6 w-6" />
                <span className="ml-2">MENU</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-gray-900 text-white border-gray-800">
              <div className="flex flex-col gap-6 mt-10">
                <h2 className="text-xl font-bold border-b border-gray-700 pb-2">Navigation</h2>
                <nav className="flex flex-col gap-4">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
