import { Search, Shield, Zap, Headphones } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  // Hero background path from history
  const bgPath = "/src/assets/images/eldoradog2g_hero_bg_1778995953819.png";

  return (
    <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={bgPath} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60" 
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-surface/20 via-surface/60 to-surface"></div>
      </div>

      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            The Safest <span className="text-brand">Gaming</span> Marketplace
          </h1>
          <p className="text-lg md:text-xl text-text-dim mb-10 max-w-2xl mx-auto">
            Trade in-game currency, accounts, items, and power leveling with 100% security through our Eldoradog2g TradeShield.
          </p>

          <div className="relative max-w-2xl mx-auto mb-12">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-text-dim" />
            <input
              type="text"
              placeholder="What are you looking for today? (e.g. OSRS Gold, WoW Accounts)"
              className="w-full bg-surface/80 backdrop-blur-md border border-white/20 rounded-2xl py-6 pl-16 pr-6 text-lg focus:outline-none focus:border-brand/50 focus:ring-2 focus:ring-brand/20 transition-all shadow-2xl"
            />
            <button className="absolute right-4 top-1/2 -translate-y-1/2 btn-primary px-8 py-3 rounded-xl">
              Search
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {[
              { icon: Shield, label: "TradeShield Protection", sub: "Garanteed Transaction" },
              { icon: Zap, label: "Instant Delivery", sub: "99% Success Rate" },
              { icon: Headphones, label: "24/7 Support", sub: "Human Assistance" }
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-left">
                <div className="p-3 bg-brand/10 rounded-xl">
                  <feature.icon className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <div className="font-bold text-sm">{feature.label}</div>
                  <div className="text-xs text-text-dim">{feature.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
