import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface AddClassName {
  className?: string;
}

export default function Footer({className}: AddClassName) {
  return (
    <>
   <footer className={`bg-white text-black ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo / Brand Name */}
          <div className="text-lg font-semibold">
            <Link href="/" className="text-white hover:text-gray-300">
              MyWebsite
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 mt-4 md:mt-0">
            <a
              href="/about"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Contact
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              Privacy Policy
            </a>
          </nav>
        </div>

        {/* Separator */}
        <Separator className="bg-gray-700" />

        {/* Social Media Section */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" asChild>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.804v-3.622h3.016V8.413c0-2.982 1.79-4.617 4.511-4.617 1.312 0 2.684.235 2.684.235v2.951h-1.513c-1.49 0-1.955.928-1.955 1.879v2.258h3.328l-.532 3.622h-2.796V24h5.484c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.954 4.569c-.885.394-1.83.656-2.825.775a4.932 4.932 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.099a4.902 4.902 0 01-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 01-2.224.084c.623 1.946 2.432 3.362 4.57 3.402a9.867 9.867 0 01-6.102 2.105c-.395 0-.786-.023-1.17-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.01-7.5 14.01-14.003 0-.213-.005-.426-.014-.637a10.025 10.025 0 002.457-2.548l-.047-.02z" />
              </svg>
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                className="w-5 h-5 text-gray-400 hover:text-gray-300"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.246 3.608-1.308 1.266-.058 1.645-.07 4.85-.07zM12 0C8.741 0 8.332.015 7.052.072c-1.285.058-2.422.267-3.337.582A6.737 6.737 0 00.654 2.29 6.738 6.738 0 00.072 3.715C.015 4.995 0 5.405 0 8.662c0 3.257.015 3.667.072 4.947.058 1.285.267 2.422.582 3.337a6.739 6.739 0 001.708 2.308 6.738 6.738 0 002.308 1.708c.915.315 2.052.524 3.337.582 1.28.057 1.689.072 4.947.072s3.667-.015 4.947-.072c1.285-.058 2.422-.267 3.337-.582a6.738 6.738 0 002.308-1.708 6.737 6.737 0 001.708-2.308c.315-.915.524-2.052.582-3.337.057-1.28.072-1.689.072-4.947s-.015-3.667-.072-4.947c-.058-1.285-.267-2.422-.582-3.337a6.739 6.739 0 00-1.708-2.308 6.738 6.738 0 00-2.308-1.708c-.915-.315-2.052-.524-3.337-.582C15.667.015 15.257 0 12 0zm0 5.838a6.162 6.162 0 110 12.324 6.162 6.162 0 010-12.324zm0 1.617a4.545 4.545 0 100 9.09 4.545 4.545 0 000-9.09zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
              </svg>
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500">
          &copy; {new Date().getFullYear()} MyWebsite. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  );
}
