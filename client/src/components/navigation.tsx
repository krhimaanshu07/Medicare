import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SearchDialog } from "@/components/search-dialog";
import { Heart, Menu, Search } from "lucide-react";

export function Navigation() {
  const [location] = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/products", label: "Products" },
    { href: "/solutions", label: "Solutions" },
    { href: "/research", label: "Research" },
    { href: "/company", label: "Company" },
    { href: "/resources", label: "Resources" },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Heart className="text-[var(--medical-blue)] h-8 w-8 mr-2" />
              <span className="text-2xl font-bold text-gray-900">Medicare</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--medical-blue)] ${
                    location === item.href ? "text-[var(--medical-blue)]" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsSearchOpen(true)}
                className="text-[var(--medical-blue)] hover:text-[var(--medical-dark)]"
              >
                <Search className="h-4 w-4" />
              </Button>
              <Link href="/#demo">
                <Button className="bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]">
                  Book Demo
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Link href="/" className="flex items-center mb-6">
                      <Heart className="text-[var(--medical-blue)] h-6 w-6 mr-2" />
                      <span className="text-xl font-bold">Medicare</span>
                    </Link>
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="text-gray-600 hover:text-[var(--medical-blue)] font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="pt-4 border-t">
                      <Button
                        onClick={() => {
                          setIsSearchOpen(true);
                          setIsMobileMenuOpen(false);
                        }}
                        variant="outline"
                        className="w-full mb-3"
                      >
                        <Search className="h-4 w-4 mr-2" />
                        Search
                      </Button>
                      <Link href="/#demo">
                        <Button className="w-full bg-[var(--medical-blue)] hover:bg-[var(--medical-dark)]">
                          Book Demo
                        </Button>
                      </Link>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
}
