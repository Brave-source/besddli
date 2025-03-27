import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-16 gap-y-10 mb-16">
          {/* About Section */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-['Inter'] text-xl font-bold mb-6">
              About BESDDLI
            </h3>
            <p className="font-['Inter']">
              Connecting Benue`s global family and empowering local growth
              through diaspora linkages and investments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-['Inter'] text-xl font-bold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/reports"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Donate
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-['Inter'] text-xl font-bold mb-6">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/submit-ticket"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Submit Tickets
                </Link>
              </li>
              <li>
                <Link
                  href="/help-center"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-['Inter'] text-xl font-bold mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.24062 16.0004C8.84375 13.9941 12.5 9.13164 12.5 6.40039C12.5 3.08789 9.8125 0.400391 6.5 0.400391C3.1875 0.400391 0.5 3.08789 0.5 6.40039C0.5 9.13164 4.15625 13.9941 5.75938 16.0004C6.14375 16.4785 6.85625 16.4785 7.24062 16.0004ZM6.5 4.40039C7.03043 4.40039 7.53914 4.6111 7.91421 4.98618C8.28929 5.36125 8.5 5.86996 8.5 6.40039C8.5 6.93082 8.28929 7.43953 7.91421 7.8146C7.53914 8.18968 7.03043 8.40039 6.5 8.40039C5.96957 8.40039 5.46086 8.18968 5.08579 7.8146C4.71071 7.43953 4.5 6.93082 4.5 6.40039C4.5 5.86996 4.71071 5.36125 5.08579 4.98618C5.46086 4.6111 5.96957 4.40039 6.5 4.40039Z"
                    fill="#9CA3AF"
                  />
                </svg>
                <span className="font-['Inter']">Makurdi, Benue State</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.65312 0.769455C5.4125 0.188205 4.77812 -0.12117 4.17188 0.0444546L1.42188 0.794455C0.878125 0.944455 0.5 1.4382 0.5 2.0007C0.5 9.73195 6.76875 16.0007 14.5 16.0007C15.0625 16.0007 15.5563 15.6226 15.7063 15.0788L16.4563 12.3288C16.6219 11.7226 16.3125 11.0882 15.7312 10.8476L12.7312 9.59758C12.2219 9.38508 11.6313 9.53195 11.2844 9.96008L10.0219 11.5007C7.82188 10.4601 6.04063 8.67883 5 6.47883L6.54063 5.21945C6.96875 4.86945 7.11562 4.28195 6.90312 3.77258L5.65312 0.77258V0.769455Z"
                    fill="#9CA3AF"
                  />
                </svg>
                <span className="font-['Inter']">+234 XXX XXX XXXX</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-3"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2.00098C1.17188 2.00098 0.5 2.67285 0.5 3.50098C0.5 3.97285 0.721875 4.4166 1.1 4.70098L7.9 9.80098C8.25625 10.0666 8.74375 10.0666 9.1 9.80098L15.9 4.70098C16.2781 4.4166 16.5 3.97285 16.5 3.50098C16.5 2.67285 15.8281 2.00098 15 2.00098H2ZM0.5 5.50098V12.001C0.5 13.1041 1.39688 14.001 2.5 14.001H14.5C15.6031 14.001 16.5 13.1041 16.5 12.001V5.50098L9.7 10.601C8.9875 11.1354 8.0125 11.1354 7.3 10.601L0.5 5.50098Z"
                    fill="#9CA3AF"
                  />
                </svg>
                <span className="font-['Inter']">info@besddli.org</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="text-white font-['Inter'] text-xl font-bold mb-4">
                Connect with Us
              </h3>
              <div className="flex space-x-4">
                <Link
                  href="https://facebook.com"
                  aria-label="Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.625 12.3994C23.625 5.97754 18.4219 0.774414 12 0.774414C5.57812 0.774414 0.375 5.97754 0.375 12.3994C0.375 18.2016 4.62609 23.011 10.1836 23.8838V15.7599H7.23047V12.3994H10.1836V9.83816C10.1836 6.92488 11.918 5.31566 14.5744 5.31566C15.8466 5.31566 17.1769 5.54254 17.1769 5.54254V8.40191H15.7106C14.2669 8.40191 13.8164 9.29816 13.8164 10.2174V12.3994H17.0405L16.5248 15.7599H13.8164V23.8838C19.3739 23.011 23.625 18.2016 23.625 12.3994Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.533 7.51116C21.5482 7.72435 21.5482 7.93759 21.5482 8.15077C21.5482 14.6533 16.599 22.1457 7.5533 22.1457C4.76648 22.1457 2.17767 21.3385 0 19.9376C0.395953 19.9832 0.776625 19.9985 1.18781 19.9985C3.48727 19.9985 5.60405 19.2219 7.29441 17.897C5.13197 17.8513 3.31978 16.435 2.69541 14.4858C3 14.5314 3.30455 14.5619 3.62437 14.5619C4.06598 14.5619 4.50764 14.501 4.91878 14.3944C2.66498 13.9375 0.974578 11.9579 0.974578 9.56701V9.50612C1.62937 9.8716 2.39086 10.1 3.19791 10.1304C1.87303 9.24718 1.00505 7.73959 1.00505 6.03399C1.00505 5.1203 1.24866 4.28274 1.67508 3.55177C4.09641 6.53654 7.73602 8.48574 11.8172 8.69898C11.7411 8.33349 11.6954 7.95282 11.6954 7.5721C11.6954 4.86141 13.8883 2.65332 16.6141 2.65332C18.0304 2.65332 19.3095 3.24723 20.208 4.20662C21.3197 3.99343 22.3857 3.58224 23.3299 3.0188C22.9643 4.16096 22.1877 5.12035 21.1674 5.72945C22.1573 5.6229 23.1167 5.34873 23.9999 4.96805C23.33 5.94263 22.4924 6.81062 21.533 7.51116Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://linkedin.com"
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 1.89941H1.49531C0.670312 1.89941 0 2.5791 0 3.41348V21.3854C0 22.2197 0.670312 22.8994 1.49531 22.8994H19.5C20.325 22.8994 21 22.2197 21 21.3854V3.41348C21 2.5791 20.325 1.89941 19.5 1.89941ZM6.34687 19.8994H3.23438V9.87754H6.35156V19.8994H6.34687ZM4.79062 8.50879C3.79219 8.50879 2.98594 7.69785 2.98594 6.7041C2.98594 5.71035 3.79219 4.89941 4.79062 4.89941C5.78437 4.89941 6.59531 5.71035 6.59531 6.7041C6.59531 7.70254 5.78906 8.50879 4.79062 8.50879ZM18.0141 19.8994H14.9016V15.0244C14.9016 13.8619 14.8781 12.3666 13.2844 12.3666C11.6625 12.3666 11.4141 13.6322 11.4141 14.94V19.8994H8.30156V9.87754H11.2875V11.2463H11.3297C11.7469 10.4588 12.7641 9.6291 14.2781 9.6291C17.4281 9.6291 18.0141 11.7057 18.0141 14.4057V19.8994Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://instagram.com"
                  aria-label="Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 21 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.5048 7.00918C7.52354 7.00918 5.11885 9.41387 5.11885 12.3951C5.11885 15.3764 7.52354 17.7811 10.5048 17.7811C13.486 17.7811 15.8907 15.3764 15.8907 12.3951C15.8907 9.41387 13.486 7.00918 10.5048 7.00918ZM10.5048 15.8967C8.57822 15.8967 7.00322 14.3264 7.00322 12.3951C7.00322 10.4639 8.57353 8.89355 10.5048 8.89355C12.436 8.89355 14.0063 10.4639 14.0063 12.3951C14.0063 14.3264 12.4313 15.8967 10.5048 15.8967ZM17.3673 6.78887C17.3673 7.4873 16.8048 8.04512 16.111 8.04512C15.4126 8.04512 14.8548 7.48262 14.8548 6.78887C14.8548 6.09512 15.4173 5.53262 16.111 5.53262C16.8048 5.53262 17.3673 6.09512 17.3673 6.78887ZM20.9345 8.06387C20.8548 6.38105 20.4704 4.89043 19.2376 3.6623C18.0095 2.43418 16.5188 2.0498 14.836 1.96543C13.1017 1.86699 7.90322 1.86699 6.16885 1.96543C4.49072 2.04512 3.0001 2.42949 1.76729 3.65762C0.534473 4.88574 0.154785 6.37637 0.0704102 8.05918C-0.0280273 9.79355 -0.0280273 14.992 0.0704102 16.7264C0.150098 18.4092 0.534473 19.8998 1.76729 21.1279C3.0001 22.3561 4.48604 22.7404 6.16885 22.8248C7.90322 22.9232 13.1017 22.9232 14.836 22.8248C16.5188 22.7451 18.0095 22.3607 19.2376 21.1279C20.4657 19.8998 20.8501 18.4092 20.9345 16.7264C21.0329 14.992 21.0329 9.79824 20.9345 8.06387ZM18.6938 18.5873C18.3282 19.5061 17.6204 20.2139 16.697 20.5842C15.3142 21.1326 12.0329 21.0061 10.5048 21.0061C8.97666 21.0061 5.69072 21.1279 4.3126 20.5842C3.39385 20.2186 2.68604 19.5107 2.31572 18.5873C1.76729 17.2045 1.89385 13.9232 1.89385 12.3951C1.89385 10.867 1.77197 7.58105 2.31572 6.20293C2.68135 5.28418 3.38916 4.57637 4.3126 4.20605C5.69541 3.65762 8.97666 3.78418 10.5048 3.78418C12.0329 3.78418 15.3188 3.6623 16.697 4.20605C17.6157 4.57168 18.3235 5.27949 18.6938 6.20293C19.2423 7.58574 19.1157 10.867 19.1157 12.3951C19.1157 13.9232 19.2423 17.2092 18.6938 18.5873Z"
                      fill="#9CA3AF"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Legal and Social */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-['Inter'] text-xl font-bold mb-6">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/sitemap"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="font-['Inter'] hover:text-white transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t justify-center flex border-gray-800 pt-6">
          <div className="text-center lg:text-left text-gray-400 font-['Inter']">
            © 2025 BESDDLI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
