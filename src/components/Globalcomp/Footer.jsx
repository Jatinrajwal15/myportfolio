import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main brand section */}
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-bold mb-4 leading-tight text-gray-100">
              Jatin Rajwal<br />
              Web Developer & Designer
            </h2>
            <p className="text-gray-400">
              Building sleek, responsive websites and apps.<br />
              Let’s create something amazing together.
            </p>
            <Link href="/Contact">
              <button className="mt-6 px-6 py-3 border border-emerald-500 rounded-lg text-sm font-medium text-emerald-500 hover:bg-emerald-600 hover:text-white transition-colors duration-300">
                Contact Me
              </button>
            </Link>
          </div>

          {/* Portfolio Links (Manual Version) */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-400">Portfolio</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/Project"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Project
                </Link>
              </li>
              <li>
                <Link
                  href="/Skills"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/Contact"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-400">Useful Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/About"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-6 text-gray-400">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/licensing"
                  className="text-gray-500 hover:text-emerald-500 transition-colors duration-200"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">Follow me on:</p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              >
                <Instagram className="w-5 h-5 text-emerald-500" />
              </a>
              <a
                href="https://www.youtube.com/@IAMjatin15"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-black/70 flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
              >
                <Youtube className="w-5 h-5 text-emerald-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
