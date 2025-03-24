'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Menu, X, ShoppingCart } from 'lucide-react'

interface AddClassName {
  className?: string; 
}
export default function Navbar({className}: AddClassName) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const cartCount = 3;
  return (
    <nav className={`bg-white shadow-md" ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-5 h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">Sewain</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center w-full">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pr-10"
              />
              <Button size="icon" className="absolute right-0 top-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            {/* Cart Icon with Badge */}
      <div className="relative ml-4">
        <Button size="icon" variant="ghost">
          <ShoppingCart className="h-6 w-6" />
        </Button>
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
            {cartCount}
          </span>
        )}
      </div>
            <Link href="/sign-in" className="ml-4 flex items-center text-gray-700 hover:text-indigo-600">
              <Button variant="outline">Sign In</Button>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-4 py-3">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search products..."
                className="w-full pr-10"
              />
              <Button size="icon" className="absolute right-0 top-0">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Link href="/cart" className="mt-4 flex w-full items-center text-gray-700 hover:text-indigo-600">
            <Button variant="outline" className='w-full'>Sign In</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}