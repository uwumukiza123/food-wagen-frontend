"use client";

import type React from "react";

import { Instagram, Facebook, Twitter } from "lucide-react";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-[#212121] text-slate-100">
      <div className="w-[76.875%] mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white transition">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Refund & Cancellation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-slate-300 text-sm font-bold tracking-widest mb-4">
              FOLLOW US
            </h3>
            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>

            <h3 className="text-white font-bold text-base mb-4">
              Receive exclusive offers in your mailbox
            </h3>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your email"
                  className="w-full bg-[#424242] text-white placeholder-slate-400 px-4 py-2.5 rounded text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold px-6 py-2.5 rounded transition whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            {isSubscribed && (
              <p className="text-amber-400 text-sm mt-2">
                Thank you for subscribing!
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="w-[76.875%] mx-auto py-6 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm">
          <p>All rights Reserved © Your Company, 2021</p>
          <p className="flex justify-center items-center">
            Made with <span className="text-amber-400 text-lg px-1">❤</span> by{" "}
            <span className="text-white">Themewagon</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
