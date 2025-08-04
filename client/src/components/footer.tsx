import { Link } from "wouter";
import { Heart, Linkedin, Twitter, Youtube, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Heart className="text-[var(--medical-blue)] h-8 w-8 mr-2" />
              <span className="text-2xl font-bold">Medicare</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Transforming healthcare through innovative AI solutions for medical imaging.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/medicare-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/medicare_ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@medicareai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://github.com/medicare-ai" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/products#medicarehd" className="text-gray-400 hover:text-white transition-colors">
                  MedicareHD™
                </Link>
              </li>
              <li>
                <Link href="/products#medicarepet" className="text-gray-400 hover:text-white transition-colors">
                  MedicarePET™
                </Link>
              </li>
              <li>
                <Link href="/products#medicaresynth" className="text-gray-400 hover:text-white transition-colors">
                  MedicareSYNTH™
                </Link>
              </li>
              <li>
                <Link href="/products#medicarealign" className="text-gray-400 hover:text-white transition-colors">
                  MedicareALIGN™
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Product Comparison
                </Link>
              </li>
              <li>
                <Link href="/products#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Research Papers
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Technical Docs
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/resources#blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/resources#news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/company#team" className="text-gray-400 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/company#careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/company#partners" className="text-gray-400 hover:text-white transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/company#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources#support" className="text-gray-400 hover:text-white transition-colors">
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Medicare. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link href="/resources#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/resources#terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/resources#cookies" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link href="/resources#gdpr" className="text-gray-400 hover:text-white transition-colors text-sm">
                GDPR
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
