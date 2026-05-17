import { Search, ShoppingCart, User, Menu, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Logo path from history
  const logoPath = "/src/assets/images/eldoradog2g_logo_1778995976729.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20 flex items-center justify-between px-6 lg:px-12">
      <div className="flex items-center gap-8">
        <a href="/" className="flex items-center gap-2">
          <img src={logoPath} alt="Eldoradog2g Logo" className="h-10 w-auto" referrerPolicy="no-referrer" />
          <span className="text-xl font-bold tracking-tighter hidden sm:block">
            Eldora<span className="text-brand">dog2g</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {["Currency", "Accounts", "Items", "Boosting"].map((cat) => (
            <button key={cat} className="flex items-center gap-1.5 text-sm font-medium hover:text-brand transition-colors group">
              {cat}
              <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8 hidden md:block">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-dim group-focus-within:text-brand transition-colors" />
          <input
            type="text"
            placeholder="Search for games or services..."
            className="w-full bg-surface-lighter border border-white/10 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/50 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="hidden sm:block text-sm font-medium hover:text-brand transition-colors">
          Sell
        </button>
        <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
        <button className="p-2 hover:bg-white/5 rounded-full relative transition-colors">
          <ShoppingCart className="w-5 h-5" />
          <span className="absolute top-0 right-0 w-4 h-4 bg-brand text-black text-[10px] font-bold rounded-full flex items-center justify-center">
            0
          </span>
        </button>
        <button className="flex items-center gap-2 bg-surface-lighter hover:bg-surface-light px-4 py-2 rounded-full transition-colors font-medium text-sm">
          <User className="w-4 h-4" />
          <span>Login</span>
        </button>
        <button className="lg:hidden p-2">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
